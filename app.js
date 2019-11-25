const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const next = require('next');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const session = require('express-session');
const ensureLogin = require('connect-ensure-login');

const Helper = require('./helpers');
const Route = require('./routes');
const model = require('./models');

const dev = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging');

// env
const configOption = dev ? {} : { path: `.env.${process.env.NODE_ENV}` };
require('dotenv').config(configOption);

const app = express();
const nextApp = next({ dev });
let server;

// passport
passport.use(new Strategy(async function(username, password, cb) {
  let user;
  try {
    user = await model.User.findOne({ where: { username }, include: ['roles'] });
  } catch (e) {
    return cb(e);
  }

  if (!user) { return cb(null, false); }

  return user.isPasswordCorrect(password, function(isPasswordMatch) {
    if (!isPasswordMatch) return cb(null, false);
    if (!user.isAdmin()) return cb(null, false);
    return cb(null, user);    
  });
}));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async function(id, cb) {
  let user;
  try {
    user = await model.User.findOne({ where: { id } });
  } catch (e) {
    return cb(e);
  }
  cb(null, user);
});

// Get port from environment and store in Express.
const port = Helper.server.normalizePort(process.env.PORT || '3000');
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/_next', express.static('.next'));

// session
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// prepare the Next, then start express
nextApp.prepare().then(() => {
  app.use(function(req, res, next) {
    req.nextApp = nextApp;
    next();
  });
  
  // Route
  app.use('/', Route.home);
  app.use('/users', Route.users);
  app.use('/admin', ensureLogin.ensureLoggedIn('/users/sign_in'), Route.admin);

  if (dev) app.get('/_next/webpack-hmr', Helper.server.handlerHMR);
  app.use(Helper.server.notFound);
  app.use(Helper.server.errorHandler);

  // Create HTTP server.
  server = http.createServer(app);

  // Listen on provided port, on all network interfaces.
  server.listen(port);
  server.on('error', Helper.server.onError);
  server.on('listening', function() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  });
});
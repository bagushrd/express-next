const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/sign_in', function(req, res, next) {
  if (req.user) return res.redirect('/admin');
  return req.nextApp.render(req, res, '/users/sign_in', { isFail: req.query.f, username: req.query.username });
});

router.post('/sign_in', passport.authenticate('local', { failureRedirect: `/users/sign_in?f=1` }), function(req, res, next) {
  return res.redirect('/admin');
});

module.exports = router;

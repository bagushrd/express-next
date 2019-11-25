const createError = require('http-errors');

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') throw error;

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// catch 404 and forward to error handler
function notFound(req, res, next) {
  next(createError(404));
}

// error handler
function errorHandler(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

// handler for webpack hot module reload of Next
function handlerHMR(req, res) {
  res.header('Content-Type', 'text/event-stream');
  setInterval(() => res.write(`data: ${new Date().toISOString()}\n\n`), 1000);
}

module.exports = {
  normalizePort,
  onError,
  notFound,
  errorHandler,
  handlerHMR,
}

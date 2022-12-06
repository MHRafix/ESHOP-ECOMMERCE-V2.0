const createError = require('http-errors');

// 404 not found error
function notFoundError(req, res, next) {
	next(createError(404, 'Page not found...!'));
}

// default error handler
function errorHandler(err, req, res, next) {
	res.status(400).json(err);
}

// export
module.exports = {
	notFoundError,
	errorHandler,
};

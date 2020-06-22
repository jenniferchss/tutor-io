const cors = require('cors');


// Restrict requests from your own application. Comment this out to allow all origins
const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:5000',
	'https://tutor.io',
	'http://localhost:3000/',
	'http://localhost:5000/',
	'https://tutor.io/'
];

exports.corsConfig = {
	origin: (origin, cb) => {
		// Allow requests with no origin like from mobile apps, postman or curl
		if (!origin) return cb(null, true);
		// Check if it is not in list
		if (allowedOrigins.indexOf(origin) === -1) {
			return cb(new Error(`The origin ${origin} is not allowed to call the tutor.io API.`), false);
		}
		// Accept request
		return cb(null, true);
	}
};

exports.cors = cors;

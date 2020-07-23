const cors = require('cors');


// Restrict requests from your own application. Comment this out to allow all origins
const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:5000',
	'http://tutor-io-c7c0c.web.app',
	'http://ancient-spire-15588.herokuapp.com/',
	'https://tutor.io',
	'http://localhost:3000/',
	'http://localhost:5000/',
	'https://tutor.io/',
	'https://tutor-io-c7c0c.web.app',
	'https://ancient-spire-15588.herokuapp.com/'
];

exports.corsConfig = {
	origin: (origin, cb) => {
		// console.log("CORS");
		// Allow requests with no origin like from mobile apps, postman or curl
		if (!origin) return cb(null, true);
		// console.log("Has origin: ", origin);
		// Check if it is not in list
		if (allowedOrigins.indexOf(origin) === -1) {
			// console.log("Origin found");
			return cb(new Error(`The origin ${origin} is not allowed to call the tutor.io API.`), false);
		}
		// Accept request
		return cb(null, true);
	}
};

exports.cors = cors;

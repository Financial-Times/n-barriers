const BARRIER_URL = `https://${process.env.BARRIERS_APP_URL}`;
const BACKEND_KEY = {
	'ft-next-backend-key': process.env.FT_NEXT_BACKEND_KEY
};
const FRAGMENT_REQUEST = 'fragment=true&inline=true&narrow=true';

const omitHeaders = ['host', 'connection', 'accept', 'cache-control', 'user-agent', 'upgrade-insecure-requests', 'accept-encoding', 'accept-language' ];

const getHeaders = (headers) => {
	let filtered = {};
	const keys = Object.keys(headers).filter(header => !omitHeaders.some(omitting => header === omitting));
	for (let key of keys) {
		filtered[key] = headers[key];
	}
	return Object.assign({}, BACKEND_KEY, filtered);
};

const getFragmentQuery = (url) => `${ url.indexOf('?') !== -1 ? '&' : '?' }${FRAGMENT_REQUEST}`;

module.exports = function (req, res) {
	const requestOptions = Object.assign({}, { headers: getHeaders(req.headers) });
	const url = `${BARRIER_URL}${req.originalUrl}`;
	fetch(`${url}${getFragmentQuery(url)}`, requestOptions)
		.then(res => res.text())
		.then(barrier => {
			res.render('demo', {
				title: 'Barriers Demo',
				barrier,
				env: process.env
			});
		});
};

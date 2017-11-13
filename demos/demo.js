const express = require('@financial-times/n-internal-tool');
const handler = require('./handler');

const app = module.exports = express({
	name: 'public',
	systemCode: 'n-barriers-demo',
	healthchecks: [],
	layoutsDir: 'demos/views',
	defaultLayout: 'layout',
	viewsDirectory: '/demos/views',
	demo: true,
	s3o: true
});

app.get('/*', handler);

app.listen(5005);

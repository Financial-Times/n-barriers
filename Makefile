node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

.PHONY: test
export IGNORE_A11Y = true

build:
	rm -rf demos/local/*.css
	node-sass demos/demo.scss --output-style compressed --include-path bower_components --include-path node_modules/@financial-times | \
	postcss --no-map --use autoprefixer postcss-discard-duplicates postcss-extract-css-block --autoprefixer.browsers "> 1% last 2 versions ie >= 9 ff ESR bb >= 7 iOS >= 5" --output public/main.css

demo: build
	node demos/demo.js

verify:
	obt verify

test: verify

run:
	node demos/demo.js

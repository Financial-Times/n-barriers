node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

.PHONY: test
export IGNORE_A11Y = true

build:
	obt build

demo:
	obt demo --runServer --updateorigami

watch:
	obt demo --runServer --updateorigami --watch

test:
	@echo "No tests yet!"

verify-css:
	obt verify

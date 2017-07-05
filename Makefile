node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

.PHONY: test

clean:
	git clean -fxd -e .idea

install:
	npm install origami-build-tools
	obt install --verbose

build:
	obt build

demo:
	obt demo --runServer --updateorigami

watch:
	obt demo --runServer --updateorigami --watch

test:
	@echo "No tests yet!"

verify:
	obt verify

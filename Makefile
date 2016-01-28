.PHONY: test

clean:
	git clean -fxd -e .idea

install:
	obt install --verbose

build:
	obt build

demo:
	obt demo --runServer --updateorigami

watch:
	obt demo --runServer --updateorigami --watch

test:
	npm test

verify:
	obt verify
.PHONY: all
all: test

node_modules: package.json
	pnpm install

pnpm-lock.yaml: package.json
	pnpm lock

.PHONY: test
test: node_modules
	$(MAKE) -C packages/test

.PHONY: pretty
pretty: node_modules
	pnpm eslint --fix .
	pnpm prettier --write .

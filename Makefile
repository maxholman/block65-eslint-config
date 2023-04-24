.PHONY: all
all: test

.PHONY: test
test:
	$(MAKE) -C packages/test

.PHONY: pretty
pretty:
	pnpm eslint --fix .
	pnpm prettier --write .

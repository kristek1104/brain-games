install: #install
	npm ci

start: #start
	node bin/brain-even.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

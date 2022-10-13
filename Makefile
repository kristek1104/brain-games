install: #install
	npm ci

start: #start
	node bin/brain-games.js

publish: #publish
	npm publish --dry-run

make lint: #lint
	npx eslint .

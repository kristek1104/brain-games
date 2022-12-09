install: #install
	npm ci

start: #start Even
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js
	node bin/brain-prime.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

tests: #tests
	node tests/evenGame.test.js

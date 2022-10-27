install: #install
	npm ci

start: #start Even
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js

startCalc: #start Calc
	node bin/brain-calc.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

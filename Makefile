install: #install
	npm ci

start: #start Even
	node bin/brain-even.js

startCalc: #start Calc
	node bin/brain-calc.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

# React-redux-boilerplate

Features in this project:

** Tree shaking with webpack 2 **
Tree Shaking is a modern dead code elimination algorithm for ECMAScript 2015+ is one of the most anticipated features in Webpack 2. By eliminating unused ES6 exports, Webpack can further help the minification process to get your bundle much smaller than ever before. Tree shaking, ultimately, bundles only the modules you import into your scripts. Any exports that were not imported will not be in the final JavaScript build.
https://webpack.js.org/guides/tree-shaking/


** Hot Module Reloading **
“Hot Module Replacement” (HMR) is a feature to inject updated modules into the active runtime.
https://webpack.github.io/docs/hot-module-replacement.html


** Writing test cases with Jest with Enzyme **
You will notice a warning while running the test cases and that warning will be there till the enzyme module is updated and they remove this warning.


** All Commands **

## Yarn Scripts

* `git commit` - will run unit tests and prettier to fix and highlight linting issues before committing the code.
* `yarn` - install dependencies
* `yarn start` - run development server
* `yarn run prod` - run production server
* `yarn run build` - build app for deployment
* `yarn run serve` - serve previously built app using pushstate server
* `yarn run lint` - lint check
* `yarn run lint:fix` - lint check + autofixes + prettify code with __prettier__

## NPM Scripts
Similar to Yarn, really...

* `npm install` - install dependencies
* `npm start` - run development server
* `npm run prod` - run production server
* `npm run build` - build app for deployment
* `npm run serve` - serve previously built app using pushstate server
* `npm run lint` - lint check
* `npm run lint:fix` - lint check + autofixes + prettify code with __prettier__


# Starter project that uses Webpack 2, React, TypeScript and Babel

## Get Started
```
git clone https://github.com/rszewczyk/webpack-react-ts-boilerplate.git
cd webpack-react-ts-boilerplate
nvm use
npm run setup && npm start
```

## Notes
Having TypesScript emit ES6 which is compiled by Babel - the es2015-wepback preset leaves the modules as ES6 for webpack to consume

In order for TypeScript to handle importing from a css module, need to use tcm utility to create the definition files for the css. Look into doing this in a postcss plugin or webpack loader perhaps?

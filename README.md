# npm

1. npm init

# .gitignore

node_modules/
dist/

# Webpack

1. npm install webpack webpack-cli webpack-dev-server --save-dev

## Webpack Configuration

Create webpack.config.js

```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

### Loaders

-   style-loader
-   css-loader

### Plugins

-   html-webpack-plugin
-   clean-webpack-plugin
-   mini-css-extract-plugin
-   terser-webpack-plugin
-   css-minimizer-webpack-plugin

## Scripts

"build": "webpack --config webpack.prod.js",
"start": "webpack serve --config webpack.dev.js"

# React

npm i react react-dom

# Babel

npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react

# Testing tools

-   Jest
-   React Testing Library
-   jest-dom

# Formating tools

-   ESLint
-   Prettier

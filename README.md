# Udacity Project

## Evaluate a news article with Natural Language Processing

### Project Details

This project uses a buildtool (webpack) to run Natural Language Processing (NLP) on articles using the TextRazor API. This gives us some details about the article, like its language, its topic by its relevance score, and an extracted sentence.

### Running the project

1. Install the dependencies: 
  $ cd into folder
  $ npm install
  $ npm audit fix

2. Running in production mode at port 8000:
  Generate the dist files
    $ npm run build-prod   
  Start server
    $ npm run start 
or
Running in development mode (webpack dev server) at port 3000:
  $ npm run build-dev

### Dependencies

node ^20.18.0
npm ^10.9.0
cors ^2.8.5
css-loader ^7.1.2
dotenv ^16.4.5
express ^4.21.1
html-webpack-plugin ^5.6.0
node-fetch ^3.3.2
style-loader ^3.3.4
webpack-cli ^5.1.4
workbox-webpack-plugin ^7.3.0

### Dev Dependencies

@babel/core ^7.26.0
@babel/preset-env ^7.26.0
babel-loader ^8.4.1
css-minimizer-webpack-plugin ^7.0.0
jest ^29.7.0
jest-environment-jsdom ^29.7.0
mini-css-extract-plugin ^2.9.2
sass ^1.72.0,
sass-loader ^14.2.1
terser-webpack-plugin ^5.3.10
webpack ^5.96.1
webpack-dev-server ^5.1.0
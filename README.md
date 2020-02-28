# react-juicer-feed

⚠️ This is an early proof of concept and still work in progress. It doesn't offer all of Juicer.io's feed options yet. Use at your own risk!

[![npm version](https://img.shields.io/npm/v/react-juicer-feed.svg)](https://www.npmjs.com/package/react-juicer-feed)

React component to display [Juicer.io](https://www.juicer.io) aggregated social media feeds.

### Demo
+ [Codesandbox](https://codesandbox.io/s/react-juicer-feed-demo-fsbu1)
+ demo create-react-app repository: [juicer-io/react-juicer-feed-demo](https://github.com/juicer-io/react-juicer-feed-demo)

### How to use it
1. create a free social media feed on [Juicer.io](https://www.juicer.io/).
2. add the `react-juicer-feed` package to your `package.json` with:
   + `$ npm install --save react-juicer-feed`, or:
   + `$ yarn add react-juicer-feed`
3. add the `<JuicerFeed>` component to your code:
  ```javascript
  import JuicerFeed from 'react-juicer-feed';

  <JuicerFeed feedId='YOUR-FEED-ID-FROM-JUICER-IO' />
  ```

### Build npm package
+ tested with [yarn](https://yarnpkg.com) 1.12.3 on OSX.
+ compile code with `yarn build`
+ build local npm package with `yarn pack`, which will create a tar file for you to inspect
+ `$ yarn login` (full instructions: [https://yarnpkg.com/lang/en/docs/publishing-a-package/](https://yarnpkg.com/lang/en/docs/publishing-a-package/))
+ publish package with `yarn publish`

### History (latest first)
+ Updated to latest Rollup and `@babel/core` npm package.
+ Based on these instructions: [codeburst.io/deploy-react-component-as-an-npm-library-d396efc25122](https://codeburst.io/deploy-react-component-as-an-npm-library-d396efc25122).

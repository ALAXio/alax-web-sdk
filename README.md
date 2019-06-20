# ALAX JavaScript SDK
## Introduction
Our mission is to create an open financial system for the gaming world by providing services for sending or receiving ALAX digital currency between online wallets, game players, or game publishers.
This SDK aims to help the development of intergrations with [ALAX](#linkToAlax) that use JavaScript, providing an easy interface to communicate with [ALAX's REST API](#linkToAlaxAPIDocs) and request the information required.

## Requirements
In order to use this SDK, you will need the following tools:
 - [Node.js v8.0.0 or above](#https://nodejs.org/en/)
Node installation will include [NPM](#https://www.npmjs.com/), which is responsible for the dependencies management.
For dealing with asynchronous code, many ES2015 features were used, as well as Promises notation to help.

## Installation
### Browser (without code bundler)
1. `git checkout git@github.com:alaxio/alax-web-sdk.git`
2. `npm install`
3. `npm run bundle`
4. Use the bundle.js file generated in dist folder to use the SDK in the browser.
5. Include in `<script src="path/to/bundle.js"></script>`
6. Define the constructor like this: const AlaxSdk = AlaxSDK.default;

### Browser (with code bundler)
1. `npm install alax-web-sdk`
2. import AlaxSdk from "alax-web-sdk"

## Usage
You can find example projects with SDK usage [here](#linkToExamples)

This SDK provides an `AlaxSdk` object containing several methods corresponding to the calls to be performed.

This is a generic example of how to use the SDK, if you need specifec details for a specific module, refer to [api folder](#linkToModulesDocs)

Before executing any request, you need to call the constructor passing your apiKey credential as parameters, making it possible to authorize the calls to the API:
```
const AlaxSDKClient = new AlaxSdk(apiKey)
```
From this point on, you just need to call the methods made available to call the API and retrieve the data you're looking for.

## Methods available
Here's a list of all the methods available, separated by module:
### transationApi
- getFee()

### productApi
- purchaseInAppItem(amount, fee)


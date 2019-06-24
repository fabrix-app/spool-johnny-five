# spool-johnny-five

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: johnny-five Spool

A Spool to make it easy to use [Johnny Five](https://www.npmjs.com/package/johnny-five) with Fabrix

## Install
```sh
$ npm install --save @fabrix/spool-johnny-five
```

## Configure

```js
// config/main.ts
import { JohnnyFiveSpool } from '@fabrix/spool-johnny-five'
export const main = {
  spools: [
    // ... other spools
    JohnnyFiveSpool
  ]
}
```

## Configuration

```
// config/johnny-five.ts
export const johnny_five = {

}
```

For more information about store (type and configuration) please see the johnny-five documentation.

## Usage
For the best results, create a Board Class and override the default methods. 
```ts
  import { Board } from '@fabrix/spool-johnny-five'
  
  export class PinBoard extends Board {

  }
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-johnny-five.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-johnny-five
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-johnny-five/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-johnny-five/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-johnny-five.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-johnny-five
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-johnny-five.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-johnny-five/coverage


# Is Any Type

[![Build Status](https://travis-ci.org/restuwahyu13/is-any-type.svg?branch=main)](https://travis-ci.org/restuwahyu13/is-any-type)
[![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/is-any-type/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/is-any-type?branch=main)
[![npm version](https://badge.fury.io/js/is-any-type.svg)](https://badge.fury.io/js/is-any-type)
![node-current](https://img.shields.io/node/v/is-any-type?style=flat-square)
![npm](https://img.shields.io/npm/dm/is-any-type)
![npm bundle size](https://img.shields.io/bundlephobia/min/is-any-type)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/is-any-type)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/restuwahyu13/is-any-type)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/is-any-type/blob/main/CONTRIBUTING.md)

`is-any-type` is a simple functionality alternative to check data type references such as typeof and instanceof, this can be used anywhere such as typeof and instanceof.

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Testing](#testing)
- [Bugs](#bugs)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install is-any-type -D or yarn add is-any-type -D
```

### Example Usage

- #### Example Usage Using CommonJS

  ```typescript
  const { isType } = require('is-any-type')

  let isString = isType('hello wordl')
  let isNumber = isType(new Date().getFullYear)
  let isNull = isType(null)
  let isUndefined = isType(undefined)
  let isObject = isType({})
  let isArray = isType([])
  let isFunction = isType(() => {})
  let isPromise = isType(new Promise((resolve) => resolve('hello wordl')))
  let isBuffer = isType(global)
  let isBoolean = isType(true)

  Promise.all([isString, isNumber, isNull, isUndefined, isObject, isArray, isFunction, isPromise, isBuffer, isBoolean])
  .then(console.log)
  ```

- #### Example Usage Using ES6

  ```javascript
  import { isType } from 'is-any-type'

  let isString = isType('hello wordl')
  let isNumber = isType(new Date().getFullYear)
  let isNull = isType(null)
  let isUndefined = isType(undefined)
  let isObject = isType({})
  let isArray = isType([])
  let isFunction = isType(() => {})
  let isPromise = isType(new Promise((resolve) => resolve('hello wordl')))
  let isBuffer = isType(Buffer.from('hello wordl'))
  let isBoolean = isType(true)

  Promise.all([isString, isNumber, isNull, isUndefined, isObject, isArray, isFunction, isPromise, isBuffer, isBoolean])
  .then(console.log)
  ```

- #### Example Usage Using ES6 With Jest

  ```typescript
  import { isType } from 'is-any-type'

  describe('Testing With Jest', () => {
    let is

    beforeEach(() => {
      is = isType
    })

    test('is instance value is from string', () => {
      const type = is('hello wordl')
      expect(type).toBeDefined()
      expect(type).toBe('string')
    })

    test('is instance value is from number', () => {
      const type = is(2021)
      expect(type).toBeDefined()
      expect(type).toBe('number')
    })

    test('is instance value is from object', () => {
      const type = is({ name: 'john doe' })
      expect(type).toBeDefined()
      expect(type).toBe('object')
    })

    test('is instance value is from array', () => {
      const type = is([1, 2, 3, 4, 5])
      expect(type).toBeDefined()
      expect(type).toBe('array')
    })

    test('is instance value is from function', () => {
      const type = is(() => 'hello wordl')
      expect(type).toBeDefined()
      expect(type).toBe('function')
    })

    test('is instance value is from promise', () => {
      const type = is(Promise.resolve('hello wordl'))
      expect(type).toBeDefined()
      expect(type).toBe('promise')
    })

    test('is instance value is from buffer', () => {
      const type = is(Buffer.from('hello wordl'))
      expect(type).toBeDefined()
      expect(type).toBe('buffer')
    })

    test('is instance value is from null', () => {
      const type = is(null)
      expect(type).toBeDefined()
      expect(type).toBe('null')
    })

    test('is instance value is from undefined', () => {
      let result
      const type = is(result)
      expect(type).toBeDefined()
      expect(type).toBe('undefined')
    })
    
    test('is instance value is from boolean', () => {
      const type = is(true)
      expect(type).toBeDefined()
      expect(type).toBe('boolean')
	  })
  })
  ```



### Testing

- Testing Via Local

  ```sh
  npm run test or make test
  ```

- Testing Via Local And Build

  ```sh
  make build
  ```

- Testing Via Docker

  ```sh
  docker build -t is-any-type or make dkb tag=is-any-type
  ```

### Bugs

For information on bugs related to package libraries, please visit
[here](https://github.com/restuwahyu13/is-any-type/issues)

### Contributing

Want to make **Is-Any-Type** more perfect ? Let's contribute and follow the
[contribution guide.](https://github.com/restuwahyu13/is-any-type/blob/main/CONTRIBUTING.md)

### License

- [MIT License](https://github.com/restuwahyu13/is-any-type/blob/main/LICENSE.md)

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="#is-any-type">BACK TO TOP</a></b>
</p>

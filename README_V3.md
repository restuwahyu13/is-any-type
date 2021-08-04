# Is Any Type

[![Build Status](https://travis-ci.org/restuwahyu13/is-any-type.svg?branch=main)](https://travis-ci.org/restuwahyu13/is-any-type) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/is-any-type/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/is-any-type?branch=main) [![npm version](https://badge.fury.io/js/is-any-type.svg)](https://badge.fury.io/js/is-any-type) ![node-current](https://img.shields.io/node/v/is-any-type?style=flat-square) ![npm](https://img.shields.io/npm/dm/is-any-type) ![npm bundle size](https://img.shields.io/bundlephobia/min/is-any-type) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/is-any-type) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/restuwahyu13/is-any-type) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/is-any-type/blob/main/CONTRIBUTING.md)

`is-any-type` is a simple functionality alternative to check data type references such as typeof and instanceof, this can be used anywhere such as typeof and instanceof, for documentation v4 [check  here](https://github.com/restuwahyu13/is-any-type/blob/main/README.md).

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Testing](#testing)
- [Bugs](#bugs)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install is-any-type -S or yarn add is-any-type -S
```

### Example Usage

- #### Example Usage Using CommonJS Module

  ```javascript
  const { isType } = require('is-any-type')

  let isString = isType('hello wordl') === 'string' // => true
  let isNumber = isType(new Date().getFullYear) === 'number' // => true
  let isNull = isType(null) === 'null' // => true
  let isUndefined = isType(undefined) === 'undefined' // => true
  let isObject = isType({}) === 'object' // => true
  let isArray = isType([]) === 'array' // => true
  let isFunction = isType(() => {}) === 'function' // => true
  let isPromise = isType(new Promise((resolve) => resolve('hello wordl'))) === 'promise' // => true
  let isBuffer = isType(Buffer.from('hello world')) ==='buffer' // => true
  let isBoolean = isType(true) === 'boolean' // => true

  let isString = isType(2021) === 'string' // => false
  let isNumber = isType('hello world') === 'number' // => false
  let isNull = isType(undefined) === 'null' // => false
  let isUndefined = isType(null) === 'undefined' // => false
  let isObject = isType({[]) === 'object' // => false
  let isArray = isType({}) === 'array'// => false
  let isFunction = isType(Promise.resolve('hello world')) === 'function' // => false
  let isPromise = isType(() => 'hello world') === 'promise' // => false
  let isBuffer = isType('hello world') === 'buffer' // => false
  let isBoolean = isType(null) === 'boolean' // => false
  
  let isStringCompare = isType('hello wordl', 'hello wordl')) // => true
  let isNumberCompare = isType(new Date().getFullYear, 2021) // => true
  let isNullCompare  = isType(null, null) // => true
  let isUndefinedCompare  = isType(undefined, undefined) // => true
  let isObjectCompare  = isType({}, {}) // => true
  let isArrayCompare  = isType([], []) // => true
  let isFunctionCompare  = isType(() => {}, Function) // => true
  let isPromiseCompare  = isType(new Promise((resolve) => resolve('hello wordl')), Promise.resolve('hello wordl')) // => true
  let isBufferCompare  = isType(Buffer.from('hello world'), Buffer.from('hello world')) // => true
  let isBooleanCompare  = isType(true, false) // => true

  let isStringCompare = isType('hello wordl', 2021)) // => false
  let isNumberCompare = isType(new Date().getFullYear, 'hello wordl') // => false
  let isNullCompare  = isType(null, undefined) // => false
  let isUndefinedCompare  = isType(undefined, null) // => false
  let isObjectCompare  = isType({}, []) // => false
  let isArrayCompare  = isType([], {}) // => false
  let isFunctionCompare  = isType(() => {}, Promise) // => false
  let isPromiseCompare  = isType(new Promise((resolve) => resolve('hello wordl')), Function) // => false
  let isBufferCompare  = isType(Buffer.from('hello world'), 2021) // => false
  let isBooleanCompare  = isType(true, null) // => false
  ```

- #### Example Usage Using ESM Module

  ```javascript
  import { isType } from 'is-any-type'

  let isString = isType('hello wordl') === 'string' // => true
  let isNumber = isType(new Date().getFullYear) === 'number' // => true
  let isNull = isType(null) === 'null' // => true
  let isUndefined = isType(undefined) === 'undefined' // => true
  let isObject = isType({}) === 'object' // => true
  let isArray = isType([]) === 'array' // => true
  let isFunction = isType(() => {}) === 'function' // => true
  let isPromise = isType(new Promise((resolve) => resolve('hello wordl'))) === 'promise' // => true
  let isBuffer = isType(Buffer.from('hello world')) ==='buffer' // => true
  let isBoolean = isType(true) === 'boolean' // => true

  let isString = isType(2021) === 'string' // => false
  let isNumber = isType('hello world') === 'number' // => false
  let isNull = isType(undefined) === 'null' // => false
  let isUndefined = isType(null) === 'undefined' // => false
  let isObject = isType({[]) === 'object' // => false
  let isArray = isType({}) === 'array'// => false
  let isFunction = isType(Promise.resolve('hello world')) === 'function' // => false
  let isPromise = isType(() => 'hello world') === 'promise' // => false
  let isBuffer = isType('hello world') === 'buffer' // => false
  let isBoolean = isType(null) === 'boolean' // => false
  
  let isStringCompare = isType('hello wordl', 'hello wordl')) // => true
  let isNumberCompare = isType(new Date().getFullYear, 2021) // => true
  let isNullCompare  = isType(null, null) // => true
  let isUndefinedCompare  = isType(undefined, undefined) // => true
  let isObjectCompare  = isType({}, {}) // => true
  let isArrayCompare  = isType([], []) // => true
  let isFunctionCompare  = isType(() => {}, Function) // => true
  let isPromiseCompare  = isType(new Promise((resolve) => resolve('hello wordl')), Promise.resolve('hello wordl')) // => true
  let isBufferCompare  = isType(Buffer.from('hello world'), Buffer.from('hello world')) // => true
  let isBooleanCompare  = isType(true, false) // => true

  let isStringCompare = isType('hello wordl', 2021)) // => false
  let isNumberCompare = isType(new Date().getFullYear, 'hello wordl') // => false
  let isNullCompare  = isType(null, undefined) // => false
  let isUndefinedCompare  = isType(undefined, null) // => false
  let isObjectCompare  = isType({}, []) // => false
  let isArrayCompare  = isType([], {}) // => false
  let isFunctionCompare  = isType(() => {}, Promise) // => false
  let isPromiseCompare  = isType(new Promise((resolve) => resolve('hello wordl')), Function) // => false
  let isBufferCompare  = isType(Buffer.from('hello world'), 2021) // => false
  let isBooleanCompare  = isType(true, null) // => false
  ```

- #### Example Usage Using CommonJS Module With Jest

  ```javascript
  const { isType } = require('is-any-type')

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

- #### Example Usage Using ESM Module With Jest

  ```javascript
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

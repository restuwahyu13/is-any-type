# Is Any Type

[![Build Status](https://travis-ci.org/restuwahyu13/is-any-type.svg?branch=main)](https://travis-ci.org/restuwahyu13/is-any-type) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/is-any-type/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/is-any-type?branch=main) [![npm version](https://badge.fury.io/js/is-any-type.svg)](https://badge.fury.io/js/is-any-type) ![node-current](https://img.shields.io/node/v/is-any-type?style=flat-square) ![npm](https://img.shields.io/npm/dm/is-any-type) ![npm bundle size](https://img.shields.io/bundlephobia/min/is-any-type) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/is-any-type) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/restuwahyu13/is-any-type) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/is-any-type/blob/main/CONTRIBUTING.md)

`is-any-type` simple functionality alternative to check data type references such as typeof and instanceof, this can be used anywhere such as typeof and instanceof, for documentation under v4 [check here](https://github.com/restuwahyu13/is-any-type/blob/main/README_V3.md).

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
  const { assert } = require('is-any-type')

  let isString = assert.isString('hello wordl') // => true
  let isNumber = assert.isNumber(new Date().getFullYear) // => true
  let isNull = assert.isNull(null) // => true
  let isUndefined = assert.isUndefined(undefined) // => true
  let isObject = assert.isObject({}) // => true
  let isArray = assert.isArray([]) // => true
  let isFunction = assert.isFunction(() => {}) // => true
  let isPromise = assert.isPromise(new Promise((resolve) => resolve('hello wordl'))) // => true
  let isBuffer = assert.isBuffer(Buffer.from('hello world')) // => true
  let isBoolean = assert.isBoolean(true) // => true

  let isString = assert.isString(2021) // => false
  let isNumber = assert.isNumber('hello world') // => false
  let isNull = assert.isNull(undefined) // => false
  let isUndefined = isType(null) // => false
  let isObject = assert.isObject([]) // => false
  let isArray = assert.isArray({}) // => false
  let isFunction = assert.isFunction(Promise.resolve('hello world')) // => false
  let isPromise = assert.isPromise(() => 'hello world') // => false
  let isBuffer = assert.isBuffer('hello world') // => false
  let isBoolean = assert.isBoolean(null) // => false

  let isStringCompare = assert.isStringCompare('hello wordl', 'hello wordl') // => true
  let isNumberCompare = assert.isNumberCompare(new Date().getFullYear, new Date().getFullYear) // => true
  let isNullCompare = assert.isNullCompare(null, null) // => true
  let isUndefinedCompare = assert.isUndefinedCompare(undefined, undefined) // => true
  let isObjectCompare = assert.isObjectCompare({}, {}) // => true
  let isArrayCompare = assert.isArrayCompare([], []) // => true
  let isFunctionCompare = assert.isFunctionCompare(() => {}, Function) // => true
  let isPromiseCompare = assert.isPromiseCompare(Promise.resolve('hello world'), Promise.resolve('hello world')) // => true
  let isBufferCompare = assert.isBufferCompare(Buffer.from('hello world'), Buffer.from('hello world')) // => true
  let isBooleanCompare = assert.isBooleanCompare(true, false) // => true

  let isStringCompare = assert.isStringCompare('hello wordl', 2021) // => false
  let isNumberCompare = assert.isNumberCompare(new Date().getFullYear, 'hello wordl') // => false
  let isNullCompare = assert.isNullCompare(null, true) // => false
  let isUndefinedCompare = assert.isUndefinedCompare(undefined, null) // => false
  let isObjectCompare = assert.isObjectCompare({}, []) // => false
  let isArrayCompare = assert.isArrayCompare([], {}) // => false
  let isFunctionCompare = assert.isFunctionCompare(() => {}, Promise) // => false
  let isPromiseCompare = assert.isPromiseCompare(Promise.resolve('hello world'), Promise.resolve('hello world')) // => false
  let isBufferCompare = assert.isBufferCompare(Buffer.from('hello world'), Promise.resolve('hello wordl')) // => false
  let isBooleanCompare = assert.isBooleanCompare(true, 2021) // => false
  ```

- #### Example Usage Using ESM Module

  ```javascript
  import { assert } from 'is-any-type'

  let isString = assert.isString('hello wordl') // => true
  let isNumber = assert.isNumber(new Date().getFullYear) // => true
  let isNull = assert.isNull(null) // => true
  let isUndefined = assert.isUndefined(undefined) // => true
  let isObject = assert.isObject({}) // => true
  let isArray = assert.isArray([]) // => true
  let isFunction = assert.isFunction(() => {}) // => true
  let isPromise = assert.isPromise(new Promise((resolve) => resolve('hello wordl'))) // => true
  let isBuffer = assert.isBuffer(Buffer.from('hello world')) // => true
  let isBoolean = assert.isBoolean(true) // => true

  let isString = assert.isString(2021) // => false
  let isNumber = assert.isNumber('hello world') // => false
  let isNull = assert.isNull(undefined) // => false
  let isUndefined = isType(null) // => false
  let isObject = assert.isObject([]) // => false
  let isArray = assert.isArray({}) // => false
  let isFunction = assert.isFunction(Promise.resolve('hello world')) // => false
  let isPromise = assert.isPromise(() => 'hello world') // => false
  let isBuffer = assert.isBuffer('hello world') // => false
  let isBoolean = assert.isBoolean(null) // => false

  let isStringCompare = assert.isStringCompare('hello wordl', 'hello wordl') // => true
  let isNumberCompare = assert.isNumberCompare(new Date().getFullYear, new Date().getFullYear) // => true
  let isNullCompare = assert.isNullCompare(null, null) // => true
  let isUndefinedCompare = assert.isUndefinedCompare(undefined, undefined) // => true
  let isObjectCompare = assert.isObjectCompare({}, {}) // => true
  let isArrayCompare = assert.isArrayCompare([], []) // => true
  let isFunctionCompare = assert.isFunctionCompare(() => {}, Function) // => true
  let isPromiseCompare = assert.isPromiseCompare(Promise.resolve('hello world'), Promise.resolve('hello world')) // => true
  let isBufferCompare = assert.isBufferCompare(Buffer.from('hello world'), Buffer.from('hello world')) // => true
  let isBooleanCompare = assert.isBooleanCompare(true, false) // => true

  let isStringCompare = assert.isStringCompare('hello wordl', 2021) // => false
  let isNumberCompare = assert.isNumberCompare(new Date().getFullYear, 'hello wordl') // => false
  let isNullCompare = assert.isNullCompare(null, true) // => false
  let isUndefinedCompare = assert.isUndefinedCompare(undefined, null) // => false
  let isObjectCompare = assert.isObjectCompare({}, []) // => false
  let isArrayCompare = assert.isArrayCompare([], {}) // => false
  let isFunctionCompare = assert.isFunctionCompare(() => {}, Promise) // => false
  let isPromiseCompare = assert.isPromiseCompare(Promise.resolve('hello world'), Promise.resolve('hello world')) // => false
  let isBufferCompare = assert.isBufferCompare(Buffer.from('hello world'), Promise.resolve('hello wordl')) // => false
  let isBooleanCompare = assert.isBooleanCompare(true, 2021) // => false
  ```

- #### Example Usage Using CommonJS Module With Jest

```typescript
const { assert } = require('is-any-type')

describe('Is Any Type Group Testing', () => {

  test('Should be value is string', () => {
    const type = assert.isString('hello wordl')
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be string match value from string', () => {
    const type = assert.isStringCompare('hello wordl', 'hello wordl')
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is number', () => {
    const type = assert.isNumber(2021)
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be number match value from number', () => {
    const type = assert.isNumberCompare(2021, 2021)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is object', () => {
    const type1 = assert.isObject({ name: 'john doe' })
    const type2 = assert.isObject({})
    
    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be object match value from object', () => {
    const type1 = assert.isObjectCompare({ name: 'john doe' }, { name: 'john doe' })
    const type2 = assert.isObjectCompare({}, {})

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be value is array', () => {
    const type1 = assert.isArray([1, 2, 3, 4, 5])
    const type2 = assert.isArray([])
    
    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be array match value from array', () => {
    const type1 = assert.isArrayCompare([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
    const type2 = assert.isArrayCompare([], [])

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be value is function', () => {
    const type = assert.isFunction(() => 'hello wordl')

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be function match value from function', () => {
    const type = assert.isFunctionCompare(() => 'hello wordl', () => 'hello wordl 2')

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })


  test('Should be value is promise', () => {
    const promise = async () => 'hello wordl'

    const type1 = assert.isPromise(Promise.resolve('hello wordl'))
    const type2 = assert.isPromise(new Promise((resolve, reject) => resolve('hello wordl')))
    const type3 = assert.isPromise(promise())

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()
    expect(type3).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
    expect(type3).toBeTruthy()
  })

  test('Should be promise match value from promise', () => {
    const promise = async () => 'hello wordl'

    const type1 = assert.isPromiseCompare(Promise.resolve('hello wordl'), Promise.resolve('hello wordl'))
    const type2 = assert.isPromiseCompare(new Promise((resolve, reject) => resolve('hello wordl')), promise())
    const type3 = assert.isPromiseCompare(promise(), Promise.resolve('hello wordl'))

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()
    expect(type3).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
    expect(type3).toBeTruthy()
  })


  test('Should be value is buffer', () => {
    const type = assert.isBuffer(Buffer.from('hello wordl'))

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be buffer match value from buffer', () => {
    const type = assert.isBufferCompare(Buffer.from('hello wordl'), Buffer.from('hello john'))

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is null', () => {
    const type = assert.isNull(null)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be null match value from null', () => {
    const type = assert.isNullCompare(null, null)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is from undefined', () => {
    let result
    const type = assert.isUndefined(result)
    
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('undefined match value from undefined', () => {
    const type = assert.isUndefinedCompare(undefined, undefined)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is from boolean', () => {
    const type = assert.isBoolean(true)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be boolean match value from boolean', () => {
    const type = assert.isBooleanCompare(true, false)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })
})
```

- #### Example Usage Using ESM Module With Jest

```typescript
import { assert } from 'is-any-type'

describe('Is Any Type Group Testing', () => {

  test('Should be value is string', () => {
    const type = assert.isString('hello wordl')
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be string match value from string', () => {
    const type = assert.isStringCompare('hello wordl', 'hello wordl')
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is number', () => {
    const type = assert.isNumber(2021)
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be number match value from number', () => {
    const type = assert.isNumberCompare(2021, 2021)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is object', () => {
    const type1 = assert.isObject({ name: 'john doe' })
    const type2 = assert.isObject({})
    
    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be object match value from object', () => {
    const type1 = assert.isObjectCompare({ name: 'john doe' }, { name: 'john doe' })
    const type2 = assert.isObjectCompare({}, {})

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be value is array', () => {
    const type1 = assert.isArray([1, 2, 3, 4, 5])
    const type2 = assert.isArray([])
    
    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be array match value from array', () => {
    const type1 = assert.isArrayCompare([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
    const type2 = assert.isArrayCompare([], [])

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
  })

  test('Should be value is function', () => {
    const type = assert.isFunction(() => 'hello wordl')

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be function match value from function', () => {
    const type = assert.isFunctionCompare(() => 'hello wordl', () => 'hello wordl 2')

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })


  test('Should be value is promise', () => {
    const promise = async () => 'hello wordl'

    const type1 = assert.isPromise(Promise.resolve('hello wordl'))
    const type2 = assert.isPromise(new Promise((resolve, reject) => resolve('hello wordl')))
    const type3 = assert.isPromise(promise())

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()
    expect(type3).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
    expect(type3).toBeTruthy()
  })

  test('Should be promise match value from promise', () => {
    const promise = async () => 'hello wordl'

    const type1 = assert.isPromiseCompare(Promise.resolve('hello wordl'), Promise.resolve('hello wordl'))
    const type2 = assert.isPromiseCompare(new Promise((resolve, reject) => resolve('hello wordl')), promise())
    const type3 = assert.isPromiseCompare(promise(), Promise.resolve('hello wordl'))

    expect(type1).toBeDefined()
    expect(type2).toBeDefined()
    expect(type3).toBeDefined()

    expect(type1).toBeTruthy()
    expect(type2).toBeTruthy()
    expect(type3).toBeTruthy()
  })


  test('Should be value is buffer', () => {
    const type = assert.isBuffer(Buffer.from('hello wordl'))

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be buffer match value from buffer', () => {
    const type = assert.isBufferCompare(Buffer.from('hello wordl'), Buffer.from('hello john'))

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is null', () => {
    const type = assert.isNull(null)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be null match value from null', () => {
    const type = assert.isNullCompare(null, null)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is from undefined', () => {
    let result
    const type = assert.isUndefined(result)
    
    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('undefined match value from undefined', () => {
    const type = assert.isUndefinedCompare(undefined, undefined)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be value is from boolean', () => {
    const type = assert.isBoolean(true)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
  })

  test('Should be boolean match value from boolean', () => {
    const type = assert.isBooleanCompare(true, false)

    expect(type).toBeDefined()
    expect(type).toBeTruthy()
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

import { assert } from '../src/libs/index'

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
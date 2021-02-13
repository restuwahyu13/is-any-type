import { isType } from '../src'

describe('is.test.ts', () => {
	let is

	beforeEach(() => {
		is = isType
	})

	test('is instance value is from string', () => {
		const type = is('hello wordl')
		expect(type).toBeDefined()
		expect(type).toBe('string')
	})

	test('string match value from string', () => {
		const type = is('hello wordl', 'hello wordl')
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('string not match value from string', () => {
		const type = is('hello wordl', 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from number', () => {
		const type = is(2021)
		expect(type).toBeDefined()
		expect(type).toBe('number')
	})

	test('number match value from number', () => {
		const type = is(2021, 2021)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('number not match value from number', () => {
		const type = is(2021, 'hello wordl')
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from object', () => {
		const type = is({ name: 'john doe' })
		expect(type).toBeDefined()
		expect(type).toBe('object')
	})

	test('object match value from object', () => {
		const type = is({ name: 'john doe' }, { name: 'jane doe' })
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('object not match value from object', () => {
		const type = is({ name: 'john doe' }, 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from array', () => {
		const type = is([1, 2, 3, 4, 5])
		expect(type).toBeDefined()
		expect(type).toBe('array')
	})

	test('array match value from array', () => {
		const type = is([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('array not match value from array', () => {
		const type = is([1, 2, 3, 4, 5], 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from function', () => {
		const type = is(() => 'hello wordl')
		expect(type).toBeDefined()
		expect(type).toBe('function')
	})

	test('function match value from function', () => {
		const type = is(() => 'hello wordl', Function)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('function not match value from function', () => {
		const type = is(() => 'hello wordl', 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from promise', () => {
		const type = is(Promise.resolve('hello wordl'))
		expect(type).toBeDefined()
		expect(type).toBe('promise')
	})

	test('promise match value from promise', () => {
		const type = is(Promise.resolve('hello wordl'), Promise)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('promise not match value from promise', () => {
		const type = is(Promise.resolve('hello wordl'), 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from buffer', () => {
		const type = is(Buffer.from('hello wordl'))
		expect(type).toBeDefined()
		expect(type).toBe('buffer')
	})

	test('buffer match value from buffer', () => {
		const type = is(Buffer.from('hello wordl'), Buffer.from('hello john'))
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('buffer not match value from buffer', () => {
		const type = is(Buffer.from('hello wordl'), 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from null', () => {
		const type = is(null)
		expect(type).toBeDefined()
		expect(type).toBe('null')
	})

	test('null match value from null', () => {
		const type = is(null, null)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('null not match value from null', () => {
		const type = is(null, 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from undefined', () => {
		let result
		const type = is(result)
		expect(type).toBeDefined()
		expect(type).toBe('undefined')
	})

	test('undefined match value from undefined', () => {
		const type = is(undefined, undefined)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('undefined not match value from undefined', () => {
		const type = is(undefined, 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})

	test('is instance value is from boolean', () => {
		const type = is(true)
		expect(type).toBeDefined()
		expect(type).toBe('boolean')
	})

	test('boolean match value from boolean', () => {
		const type = is(true, false)
		expect(type).toBeDefined()
		expect(type).toBeTruthy()
	})

	test('boolean not match value from boolean', () => {
		const type = is(true, 2021)
		expect(type).toBeDefined()
		expect(type).toBeFalsy()
	})
})

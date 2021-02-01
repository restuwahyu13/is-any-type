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
})

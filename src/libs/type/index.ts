import { Compare } from '../compare'

export class Type extends Compare {
	protected isArrayCheck: string
	protected isBufferCheck: string
	protected isPromiseCheck: string
	protected isFunctionCheck: string
	protected isObjectCheck: string
	protected isNullCheck: string
	protected isUndefinedCheck: string
	protected isStringCheck: string
	protected isNumberCheck: string
	protected isBooleanCheck: string
	protected isTypeData: string[]
	protected isGroup: any
	protected isMatch: number
	protected isResult: string

	constructor() {
		super()

		this.isTypeData = ['array', 'buffer', 'promise', 'function', 'object', 'null', 'undefined', 'string', 'number', 'boolean']
	}

	public isArray(data: any[]): boolean {
		this.isArrayCheck = Array.isArray(data) && 'array'
		this.isMatch = this.isTypeData.indexOf(this.isArrayCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'array' ? true : false
	}

	public isBuffer(data: Buffer): boolean {
		this.isBufferCheck = Buffer.isBuffer(data) && 'buffer'
		this.isMatch = this.isTypeData.indexOf(this.isBufferCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'buffer' ? true : false
	}

	public isPromise(data: Promise<any>): boolean {
		this.isPromiseCheck = data instanceof Promise && 'promise'
		this.isMatch = this.isTypeData.indexOf(this.isPromiseCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'promise' ? true : false
	}

	public isFunction(data: Function): boolean {
		this.isFunctionCheck = data instanceof Function && 'function'
		this.isMatch = this.isTypeData.indexOf(this.isFunctionCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'function' ? true : false
	}

	public isObject(data: Record<string, any>): boolean {
		this.isObjectCheck =
			Object.getOwnPropertyNames(data)[0] !== (undefined || null || 'length') || Object.create(data) === Object.create({})
				? 'object'
				: 'undefined'
		this.isMatch = this.isTypeData.indexOf(this.isObjectCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'object' ? true : false
	}

	public isNull(data: null): boolean {
		this.isNullCheck = data === null && 'null'
		this.isMatch = this.isTypeData.indexOf(this.isNullCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'null' ? true : false
	}

	public isUndefined(data: undefined): boolean {
		this.isUndefinedCheck = data === undefined && 'undefined'
		this.isMatch = this.isTypeData.indexOf(this.isUndefinedCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'undefined' ? true : false
	}

	public isString(data: string): boolean {
		this.isStringCheck = typeof data === 'string' && 'string'
		this.isMatch = this.isTypeData.indexOf(this.isStringCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'string' ? true : false
	}

	public isNumber(data: number): boolean {
		this.isNumberCheck = typeof data === 'number' && 'number'
		this.isMatch = this.isTypeData.indexOf(this.isNumberCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'number' ? true : false
	}

	public isBoolean(data: boolean): boolean {
		this.isBooleanCheck = typeof data === 'boolean' && 'boolean'
		this.isMatch = this.isTypeData.indexOf(this.isBooleanCheck)
		this.isResult = this.isTypeData[this.isMatch]
		return this.isResult === 'boolean' ? true : false
	}
}

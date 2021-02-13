export default function isType(data: any, compare?: any): string | boolean {
	const isArray: string = Array.isArray(data) && 'array'
	const isBuffer: string = Buffer.isBuffer(data) && 'buffer'
	const isPromise: string = data instanceof Promise && 'promise'
	const isFunction: string = data instanceof Function && 'function'
	const isObject: string = data === Object.assign({}) && 'object'
	const isNull: string = data === null && 'null'
	const isUndefined: string = data === undefined && 'undefined'

	const isArrayCompare: boolean = Array.isArray(data) && Array.isArray(compare)
	const isBufferCompare: boolean = Buffer.isBuffer(data) && Buffer.isBuffer(compare)
	const isPromiseCompare: boolean = data instanceof Promise && compare instanceof Promise
	const isFunctionCompare: boolean = data instanceof Function && compare instanceof Function
	const isObjectCompare: boolean = Object.isExtensible(data) && Object.isExtensible(compare)
	const isNullCompare: boolean = data === null && compare === null
	const isUndefinedCompare: boolean = data === undefined && compare === undefined
	const isStringCompare: boolean = typeof data === 'string' && typeof compare === 'string'
	const isNumberCompare: boolean = typeof data === 'number' && typeof compare === 'number'
	const isBooleanCompare: boolean = data instanceof Boolean && compare instanceof Boolean

	const isGroup: string =
		isArray || isBuffer || isPromise || isFunction || isObject || isNull || isUndefined

	const isGroupCompare =
		isArrayCompare ||
		isBufferCompare ||
		isPromiseCompare ||
		isFunctionCompare ||
		isObjectCompare ||
		isNullCompare ||
		isUndefinedCompare ||
		isStringCompare ||
		isNumberCompare ||
		isBooleanCompare

	const isCheck: string = isGroup || typeof data
	const isCheckCompare: boolean = isGroupCompare || false

	const isTypeData: string[] = [
		'array',
		'buffer',
		'promise',
		'function',
		'object',
		'null',
		'undefined',
		'string',
		'number',
		'boolean'
	]

	const isMatch: number = isTypeData.indexOf(isCheck)
	const isResult: string = isTypeData[isMatch]
	const isCompare: string | boolean = !compare ? isResult : isCheckCompare

	return isCompare
}

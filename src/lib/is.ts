export default function isType(data: any): string {
	const isArray: string = Array.isArray(data) && 'array'
	const isBuffer: string = Buffer.isBuffer(data) && 'buffer'
	const isPromise: string = data instanceof Promise && 'promise'
	const isFunction: string = data instanceof Function && 'function'
	const isObject: string = data === Object.assign({}) && 'object'
	const isNull: string = data === null && 'null'
	const isUndefined: string = data === undefined && 'undefined'

	const isGroup: string =
		isArray || isBuffer || isPromise || isFunction || isObject || isNull || isUndefined

	const isCheck: string = isGroup || typeof data

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

	return isResult
}

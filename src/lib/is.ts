export default function isType(data: any): string {
	const isArray: string = Array.isArray(data) && 'array'
	const isBuffer: string = Buffer.isBuffer(data) && 'buffer'
	const isObject: string = data === {} && 'object'
	const isNull: string = data === null && 'null'
	const isUndefined: string = data === undefined && 'undefined'
	const isPromise: string = data instanceof Promise && 'promise'

	const isGrouping: string = isArray || isBuffer || isObject || isNull || isUndefined || isPromise
	const isCheck: string = !isGrouping ? typeof data : isGrouping

	const isTypeData: string[] = [
		'number',
		'string',
		'array',
		'object',
		'undefined',
		'null',
		'function',
		'boolean',
		'promise',
		'buffer'
	]

	const isMatch: number = isTypeData.indexOf(isCheck)
	const isResult: string = isTypeData[isMatch]

	return isResult
}

export default function isType(data) {
    const isArray = Array.isArray(data) && 'array';
    const isBuffer = Buffer.isBuffer(data) && 'buffer';
    const isObject = data === {} && 'object';
    const isNull = data === null && 'null';
    const isUndefined = data === undefined && 'undefined';
    const isPromise = data instanceof Promise && 'promise';
    const isGrouping = isArray || isBuffer || isObject || isNull || isUndefined || isPromise;
    const isCheck = !isGrouping ? typeof data : isGrouping;
    const isTypeData = [
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
    ];
    const isMatch = isTypeData.indexOf(isCheck);
    const isResult = isTypeData[isMatch];
    return isResult;
}

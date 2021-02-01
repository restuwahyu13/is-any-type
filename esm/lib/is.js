export default function isType(data) {
    const isArray = Array.isArray(data) && 'array';
    const isBuffer = Buffer.isBuffer(data) && 'buffer';
    const isPromise = data instanceof Promise && 'promise';
    const isFunction = data instanceof Function && 'function';
    const isObject = data === Object.assign({}) && 'object';
    const isNull = data === null && 'null';
    const isUndefined = data === undefined && 'undefined';
    const isGroup = isArray || isBuffer || isPromise || isFunction || isObject || isNull || isUndefined;
    const isCheck = isGroup || typeof data;
    const isTypeData = [
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
    ];
    const isMatch = isTypeData.indexOf(isCheck);
    const isResult = isTypeData[isMatch];
    return isResult;
}

export const isNumber = (o: unknown): o is number => typeof o === 'number';

export const isString = (o: unknown): o is string => typeof o === 'string';

export const isBoolean = (o: unknown): o is boolean => o === true || o === false;

export const isArray = Array.isArray;

export const isObject = <T>(o: unknown): o is T => o !== null && typeof o === 'object';

export const isFunction = (o: unknown): o is (...args: any[]) => any => typeof o === 'function';

export const isUndefined = (o: unknown): o is undefined => typeof o === 'undefined';

export const isNull = (o: unknown): o is null => o === null;

export const isBooleanStringLiteral = (o: unknown): o is string => o === 'true' || o === 'false';

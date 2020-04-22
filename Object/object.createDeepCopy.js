// 	.createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.

Object.prototype.createDeepCopy = function (sourceObj) {
    const newObj = {};

    for (let key in sourceObj) {
        if (typeof(sourceObj[key]) === "object" && sourceObj[key] != null) {
            newObj[key] = Object.createDeepCopy(sourceObj[key])
        } else {
            newObj[key] = sourceObj[key]
        }
    }
    return newObj;
}


Object.prototype.createCopy = function (src, isDeep, level) {
    let _level = level ? level : 0;

    let result = {};

    for (key in src) {
        if (src.hasOwnProperty(key)) {
            if (typeof src[key] !== 'object') {
                result[key] = src[key];
            } else {
                if (isDeep) {
                    result[key] = Object.createCopy(src[key], isDeep);
                } else {
                    if (_level >= 1){
                        result[key] = Object.createCopy(src[key], isDeep, ++_level);
                    } else {
                        result[key] = src[key];
                    }
                }
            } 
        }
    }

    return result;
}
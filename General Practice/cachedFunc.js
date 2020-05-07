// Caching results is often used for complex calculation or working wiht time-consuming API calls. Create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

const complexFunc = () => {
    let cache = {};

    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
}
 
const cachedFunc = complexFunc();

// test
console.log(cachedFunc(9)); // calc
console.log(cachedFunc(9)); // return from cache
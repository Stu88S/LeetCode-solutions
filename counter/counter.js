/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    let count = n;

    return function counter() {
        let result = count;
        count +=1;
        return result;
    };
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
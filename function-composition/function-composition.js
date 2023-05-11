/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
    return functions.reduceRight((prevFn, currentFn) => (value) => currentFn(prevFn(value)), (x) => x);
}

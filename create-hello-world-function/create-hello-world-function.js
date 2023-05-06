/**
 * @return {Function}
 */
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

 const createHelloWorld = (...args) => () => "Hello World";
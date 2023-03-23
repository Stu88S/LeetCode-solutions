/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    return [...s].reduce((result, symbol, index) => {
        const currentSymbolValue = romanValues[symbol];
        const nextSymbolValue = romanValues[s[index + 1]];

        if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
            return result - currentSymbolValue;
        } else {
            return result + currentSymbolValue;
        }
    }, 0);
};
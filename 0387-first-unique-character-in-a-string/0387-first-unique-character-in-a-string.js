/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(str) {
    let set = new Set();
    let map = new Map();
    
    for (let i = 0; i< str.length; i++) {
        if(!set.has(str[i])) {
            set.add(str[i]);
            map.set(str[i], i);   
        } else {
            map.delete(str[i])
        }
    }
    return map.size === 0 ? -1 : map.values().next().value;
}
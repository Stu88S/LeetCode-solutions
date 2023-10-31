/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
    let stack = [];
    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else {
            while(stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroids[i])) {
                stack.pop();
            }
            if(stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroids[i]);
            } else if(stack[stack.length - 1] === Math.abs(asteroids[i])) {
                stack.pop();
            }
        }
    }
    return stack;
}
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let el of asteroids) {
        if(el > 0) {
            stack.push(el)
        } else {
            while (-1*el > stack[stack.length-1] && stack[stack.length-1] > 0) {
                stack.pop()
            }
            if (-1*el === stack[stack.length-1] && stack[stack.length-1] > 0) {
                stack.pop();
            }
            else if(-1*el < stack[stack.length-1] && stack[stack.length-1] > 0) {
                continue;
            } else {
                stack.push(el)
            }
        }
    }

    return stack;
};

const asteroids = [-2,-1,1,2];
const res = asteroidCollision(asteroids);
console.log(res)
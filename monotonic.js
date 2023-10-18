var dailyTemperatures = function (T) {
    let stack = [];
    let result = new Array(T.length).fill(0);
    for (let i = 0; i < T.length; i++) {
        console.log('s', stack)
        console.log('s2', T[i],  T[stack[stack.length - 1]])
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let temp = stack.pop();
            console.log('t', temp)
            result[temp] = i - temp;
            console.log('r', result)
        }
        stack.push(i)
    }
    return result;
};

const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures))
var removeStars = function(s) {
    let stack = [];

    for (let letter of s) {
        if(letter === '*'){
            stack.pop();
        } else {
            stack.push(letter)
        }
    }

    return stack.join('');
};

const s = "leet**cod*e";
const res = removeStars(s);
console.log(res);
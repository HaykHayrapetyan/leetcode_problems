var decodeString = function(s) {
    const stack = [];
    let innerString = ""
    for (let letter of s) {
        if(letter === "]") {
            innerString = ""
            while (stack[stack.length-1] !== "[") {
                innerString = stack.pop() + innerString;
            }
            stack.pop();
            let repeat = "";
            while (Number.isInteger(+stack[stack.length-1])) {
                repeat = stack.pop() + repeat;
            }
            innerString = innerString.repeat(repeat);
            stack.push(innerString)
        } else {
            stack.push(letter)
        }
        
    }
    return stack.join('');
};

const s = "2[abc]3[cd]ef" //aaabcbc
const s2= "3[a20[c]]"
const res = decodeString(s2);
console.log(res)

// /bcaaabcaaa
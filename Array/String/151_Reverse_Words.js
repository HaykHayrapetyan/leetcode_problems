var reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.reverse();
    let trimmedArr = arr.filter(el => el !== '')
    return trimmedArr.join(' ')
};

const s = "  hello world  ";
const res = reverseWords(s);
console.log(res)
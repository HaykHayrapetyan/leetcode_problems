var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelIndexes = [];
    const vowelsQueue = [];
    let newS = ""

    for(let i=0; i<s.length; i++){
        if(vowels.indexOf(s[i]) > -1) {
            vowelIndexes.push(i);
            vowelsQueue.push(s[i])
        }
    }

    for(let i=0; i<s.length; i++){
        if(vowelIndexes.indexOf(i) > -1){
            newS += vowelsQueue.pop()
        } else {
            newS += s[i]
        }
    }
    return newS
};

const s = "hello";
const res = reverseVowels(s);
console.log(res)
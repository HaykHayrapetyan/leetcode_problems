var closeStrings = function(word1, word2) {
    let obj1 = {}
    let obj2 = {}

    for (let letter of word1) {
        if (!(letter in obj1)) obj1[letter] = 0;
        obj1[letter]++;
    }
    for (let letter of word2) {
        if (!(letter in obj2)) obj2[letter] = 0;
        if (!(letter in obj1)) return false;
        obj2[letter]++;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    
    let arr1 = Object.values(obj1).sort((a, b) => a-b);
    let arr2 = Object.values(obj2).sort((a, b) => a-b);
    
    for (let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true
};

const word1 = "cabbba";
const word2 = "babccc";
const res = closeStrings(word1, word2);
console.log(res)
var gcdOfStrings = function(str1, str2) {
    const shortStr =  str1.length > str2.length ? str2 : str1;
    const longStr = str1.length > str2.length ? str1 : str2;
    const shortL = shortStr.length;
    let i = 1
    while (i !== shortL) {
        for(let j=0; j<shortL-i; j++){
            if(longStr.includes(shortStr.slice(j, i+j+1))) {
                return shortStr.slice(j, i+j+1);
            }
        }
        i++;
    }
    return "";
};

const word1 = "ABABAB";
const word2 = "ABAB";
const gcd = gcdOfStrings(word1, word2)
console.log(gcd)
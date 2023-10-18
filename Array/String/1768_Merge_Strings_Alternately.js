var mergeAlternately = function(word1, word2) {
    const l1 = word1.length;
    const l2 = word2.length;
    let i = 0
    let s = ""
    while(i < l1 && i < l2){
        s += word1[i];
        s += word2[i];
        i++;
    }
    if(i === l1) {
        s += word2.slice(i)
    } else if(i === l2) {
        s += word1.slice(i)
    } 
    return s
};

const word1 = "abcasdf";
const word2 = "pqrtd";
const merged = mergeAlternately(word1, word2)
console.log(merged)

var maxVowels = function(s, k) {
    let obj = {
        'a': true, 
        'e': true, 
        'i': true, 
        'o': true, 
        'u': true,
    }
    let count = 0;
    for(let i=0; i<k; i++) {
        if(s[i] in obj){
            count++
        }
    }
    let max = count;

    for(let i=k; i<s.length; i++) {
        if(s[i] in obj){
            count++;
        }
        if(s[i-k] in obj){
            count--;
        }
        max = Math.max(max, count);
    }
    return max;
};

const s = "leetcode";
const k = 3;
const res = maxVowels(s, k);
console.log(res)
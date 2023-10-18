var compress = function(chars) {
    let i = 0;
    let j = 0;
    let index = 0;
    let count = 0;
    
    while(i < chars.length){
        while(j < chars.length && chars[i] === chars[j]) {
            j++;
        }
        chars[index++] = chars[i]
        if(j-i >= 2) {
            strCount = j - i + "";
            for(let s of strCount) {
                chars[index++] = s
            }
        }
        i = j;
    }
    console.log(chars.slice(0, index))
    return index;
};

const chars = ["a","a","a","b","b","c","c"]
const res = compress(chars);
console.log(res)
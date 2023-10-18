/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let trimmedS = s.trim();
    let i = 0;
    let endProd = 1
    if((trimmedS[0] === '+' || trimmedS[0] === '-')){
        if(isNaN(parseInt(trimmedS[1]))){
            return 0
        }
        i += 1;
        if(trimmedS[0] === '-'){ endProd *= -1 }
    }
    trimmedS = parseInt(trimmedS.slice(i)) * endProd
    if(trimmedS < -2147483648){
        return -2147483648
    } else if(trimmedS > 2147483647){
        return 2147483647
    }
    return trimmedS || 0
};

const s = "-65";
console.log(myAtoi(s));

[-231, 231 - 1]
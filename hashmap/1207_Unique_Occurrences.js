var uniqueOccurrences = function(arr) {
    let obj = {}

    for (let el of arr) {
        if(!(el in obj)) obj[el] = 0 
        obj[el]++;
    }
    let valArr = Object.values(obj)
    let setArr = new Set(valArr)
    console.log(setArr.size, valArr.length)
    return setArr.size === valArr.length
};

const arr = [1,2,2,1,1,3];
const res = uniqueOccurrences(arr);
console.log(res)
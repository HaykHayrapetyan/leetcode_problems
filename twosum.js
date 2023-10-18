const twoSum = function(arr, target){
    let p1 = 0;
    let p2 = arr.length-1;
    const result = []

    while(p1<p2){
        let sum = arr[p1] + arr[p2];
        if(sum > target) p2--;
        else if(sum < target) p1++;
        else {
            result.push([arr[p1], arr[p2]])
            p2--;
        }
    }
    return result
}

const arr = [3,6,7,10,10,20]
const target = 13
console.log(twoSum(arr, target))
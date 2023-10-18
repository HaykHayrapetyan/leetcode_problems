// var findMaxAverage = function(nums, k) {
//     let max = -Infinity;
//     for (let i=0; i<nums.length-k+1; i++){
//         let sum = 0;
//         for (let j=i; j<i+k; j++){
//             console.log(nums[j])
//             sum += nums[j];
//         }
//         if (sum/k > max){
//             max = sum/k
//         }
//     }
//     return max
// };


var findMaxAverage = function(nums, k) {
    let sum = 0
    for (let i=0; i<k; i++){
        sum += nums[i];
    }

    let max = sum;
    console.log( k, nums.length)
    for(let i=k; i<nums.length; i++){
        console.log(nums[i])
        sum += nums[i];
        sum -= nums[i-k];
        max = Math.max(max, sum)
    }
    return max/k
};

const nums = [1,12,-5,-6,50,3];
const k = 4;
const res = findMaxAverage(nums, k);
console.log(res)
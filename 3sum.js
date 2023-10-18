// var threeSum = function (nums) {
//     const sortedNums = nums.sort((a, b) => a - b);
//     let p1 = 0;
//     let p2;
//     let p3 = nums.length - 1;
//     let result = []
//     console.log(sortedNums)
//     while (p1 + 1 < p3) {
//         console.log(sortedNums[p1], sortedNums[p2], sortedNums[p3])
//         console.log(result)
//         if (sortedNums[p1] <= 0 && sortedNums[p3] >= 0) {
//             let sum = sortedNums[p1] + sortedNums[p3]
//             sum *= -1;
//             if (sum >= 0) {
//                 p2 = p3 - 1;
//                 while (p2 > p1 && sortedNums[p2] > sum) {
//                     p2--
//                 }
//             } else {
//                 p2 = p1 + 1;
//                 while (p2 < p3 && sortedNums[p2] < sum) {
//                     p2++;
//                 }
//             }
//             if (sortedNums[p2] === sum) {
//                 result.push([sortedNums[p1], sortedNums[p2], sortedNums[p3]])
//                 if(Math.abs(sortedNums[p1]) < Math.abs(sortedNums[p3])) p3--
//                 if(Math.abs(sortedNums[p1]) > Math.abs(sortedNums[p3])) p1++
//                 else {
//                     p1++;
//                     p3--;
//                 };
//             } else if (sortedNums[p2] > sum) {
//                 p3--;
//             } else {
//                 p1++;
//             }
//         } else {
//             break;
//         }
//     }
//     const map = {}
//     const result2 = []

//     for (let arr of result){
//         let str = `${arr[0]},${arr[1]},${arr[2]}`
//         if(!(str in map)) {
//             map[str] = true
//             result2.push(arr)
//         }
//     }
//     return result2
// };


var threeSum = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = 1;
    let p3 = nums.length - 1;
    const n = 0;
    let target;
    let result = []
    console.log(sortedNums)

    while(p1<p3-1){
        target = n - sortedNums[p1];
        p2 = p1+1;
        p3 = nums.length - 1;
        while(p2<p3){
            console.log(sortedNums[p1], sortedNums[p2], sortedNums[p3])
            let sum = sortedNums[p2] + sortedNums[p3];
            if(sum > target) p3--;
            else if(sum < target) p2++;
            else {
                result.push([sortedNums[p1], sortedNums[p2], sortedNums[p3]])
                p3--;
            }
        }
        console.log('p', p1,p2,p3)
        p1++;
    }
    
    const map = {}
    const result2 = []

    for (let arr of result) {
        let str = `${arr[0]},${arr[1]},${arr[2]}`
        if (!(str in map)) {
            map[str] = true
            result2.push(arr)
        }
    }
    return result2
};

const nums = [-1,0,1,2,-1,-4]
const nums2 = [0,0,0]
console.log(threeSum(nums))


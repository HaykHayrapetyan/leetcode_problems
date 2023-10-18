var productExceptSelf = function (nums) {
    // let leftArr = [];
    // let rightArr = [];
    // let result = [];
    // let left = 1;
    // let right = 1;
    // const length = nums.length - 1;
    // let rIndex = length - 1;
    // let lIndex = -1;
    // for (let i = 0; i < nums.length; i++) {
    //     left = left * nums[i];
    //     leftArr.push(left);
    // }
    // for (let i = nums.length - 1; i > -1; i--) {
    //     right = right * nums[i];
    //     rightArr.push(right);
    // }
    // console.log(leftArr, rightArr);
    // for (let i = 0; i < nums.length; i++) {
    //     const res =
    //         (lIndex == -1 ? 1 : leftArr[lIndex]) *
    //         (rIndex == -1 ? 1 : rightArr[rIndex]);
    //     console.log('res', res, lIndex, rIndex)
    //     result.push(res);
    //     rIndex--;
    //     lIndex++;
    // }
    // return result;

    let result = [];
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        // compute left product for nums[i]
        result[i] = left;
        left *= nums[i];
    }
    console.log(result)

    for (let i = nums.length - 1; i >= 0; i--) {
        // compute right product for nums[i] and multiply it with the left product
        result[i] *= right;
        console.log('r', result[i])
        right *= nums[i];
    }

    return result;
};

const nums = [1,2,3,4];
const res = productExceptSelf(nums);
console.log(res)
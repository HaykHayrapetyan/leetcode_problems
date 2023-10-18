var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    let count = 0;

    while(j < nums.length) {
        while(nums[j] === 0 && j < nums.length) {
            j++;
            count++;
        }
        nums[i] = nums[j];
        i++;
        j++;
    }
    while(count > 0) {
        nums[nums.length-count] = 0
        count--;
    }
    return nums;
};

const nums = [0,1,0,3,12];
const res = moveZeroes(nums);
console.log(res)
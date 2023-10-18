var longestSubarray = function(nums) {
    let canRemove = true;
    let max = 0;
    let len = 0;
    let i = 0, j = 0;
    let lastI = 0;

    while (i < nums.length && j < nums.length) {
        if(nums[j] === 0){
            if(canRemove === true){
                canRemove = false;
                lastI = j;
                j++;
            } else {
                i = lastI + 1;
                lastI = j;
                len = j-i;
                j++;
            }
        } else {
            j++;
            len++;
            max = Math.max(max, len);
        }
    }

    return max === nums.length ? max - 1 : max; 
};

const nums = [1,1,0,1];
const res = longestSubarray(nums);
console.log(res)
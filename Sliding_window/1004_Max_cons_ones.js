var longestOnes = function(nums, k) {
    let k2 = k;
    let count = 0;
    let max = 0;
    let lastIndex = 0;

    if(k === nums.length){
        return k;
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0){
            if (k2 > 0) {
                k2--;
                count++;
            } else {
                lastIndex = i;
                break;
            }
        } else {
            count++;
        }
    }

    let secondIndex = 0;
    for(let i=lastIndex; i<nums.length; i++) {
        if(nums[i] === 0){
            if(k2 > 0){
                k2--;
                count++;
            } else {
                while (secondIndex < nums.length) {
                    if(nums[secondIndex] === 1) {
                        count--;
                        secondIndex++;
                    } else {
                        secondIndex++;
                        break
                    }
                }
            }

        } else {
            count++;
        }
        max = Math.max(max, count)
    }
    console.log(count, lastIndex, max)
    return max
};

const nums = [1,1,1,1,0,0,0,1,0,1];
const k = 1;
const res = longestOnes(nums, k);
console.log(res)
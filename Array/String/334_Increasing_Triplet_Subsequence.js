function increasingTriplet(nums) {
    let min = Math.max(...nums);
    let mid = min;

    for (let num in nums) {
        if(num <= min) {
            console.log('min', num)
            min = num;
        }
        else if(num <= mid) {
            console.log('middd', num)
            mid = num;
        }
        else {
            console.log('else', num)
            return true;
        }
    }

    return false;
};

console.log(increasingTriplet([5,4,3,2,1]))
var largestAltitude = function(gain) {
    let max = 0
    let cumulativeArr = gain.reduce((prev, curr) => {
        max = Math.max(max, prev+curr)
        return prev + curr
    }, 0)
    return max
};

const gain = [-4,-3,-2,-1,4,3,2]
const res = largestAltitude(gain);
console.log(res)
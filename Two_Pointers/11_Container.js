var maxArea = function(height) {
    let h1 = height.map((el, i) => {
        if(i === 0) return el;
        return el - height[i-1];
    })

    let reversedHeight = height.slice(0).reverse()
    let h2 = reversedHeight.map((el, i) => {
        if(i === 0) return el;
        return el - reversedHeight[i-1];
    }).reverse();

    let final = []
    for (let i=0; i<height.length; i++){
        final.push(h1[i] + h2[i])
    }
    console.log(h1, h2, final)
    let max = -Infinity;
    let max2 = -Infinity;
    let maxI, maxI2;
    for (let i=0; i<final.length; i++){
        if(final[i] > max) {
            max2 = max;
            max = final[i];
            maxI2 = maxI;
            maxI = i;
        } else if (final[i] > max2) {
            max2 = final[i];
            maxI2 = i
        }
    }
    console.log(final, maxI, maxI2, max, max2)
    return (Math.abs(maxI - maxI2)) * Math.min(height[maxI], height[maxI2])
};

const height = [4,3,2,1,4];
const res = maxArea(height);
console.log(res)
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1 && flowerbed[i] === 0) { 
            count++;
            i++ 
        }
    }

    return count >= n
};

const flowerbed = [1,0,0,0,0,1];
const n = 1;
const flower = canPlaceFlowers(flowerbed, n)
console.log(flower)
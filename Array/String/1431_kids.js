var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const boolArr = [];

    for(let candy of candies){
        if(candy + extraCandies >= max){
            boolArr.push(true);
        } else {
            boolArr.push(false);
        }
    }
    return boolArr
};

const candies = [4,2,1,1,2];
const extraCandies = 1
const kids = kidsWithCandies(candies, extraCandies)
console.log(kids)
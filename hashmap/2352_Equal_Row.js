var equalPairs = function(grid) {
    const obj = {};
    const countObj = {};

    for (let el of grid) {
        let stringified = JSON.stringify(el);
        if(!(stringified in obj)) obj[stringified] = 0;
        if(!(stringified in countObj)) countObj[stringified] = 0;
        if((stringified in countObj)) countObj[stringified]++;
    }
    let secondGrid = []
    for (let i=0; i<grid.length; i++) {
        let arr = []
        for (let j=0; j<grid[0].length; j++) {
            arr.push(grid[j][i])
        }
        secondGrid.push(arr)
    }

    for (let el of secondGrid) {
        let stringified = JSON.stringify(el);
        if((stringified in obj)) obj[stringified] += countObj[stringified];
    }
    console.log(countObj, obj)
    return Object.values(obj).reduce((prev, curr) => prev + curr, 0)
};

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
const res = equalPairs(grid);
console.log(res)
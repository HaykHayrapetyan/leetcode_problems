var calcEquation = function (equations, values, queries) {
    let obj = {}
    for (let i = 0; i < equations.length; i++) {
        let [x, y] = equations[i]
        let n = values[i]
        // x => y
        if (!obj[x]) obj[x] = [];
        obj[x].push([y, n])

        // y => x
        if (!obj[y]) obj[y] = [];
        obj[y].push([x, 1 / n])
    }
    console.log(obj)
    let output = [];
    let visited = new Set()
    for (let [x, y] of queries) {
        // x = 'a', y = 'c'
        if (!(x in obj) || !(y in obj)) {
            output.push(-1.0);
            continue;
        }
        visited = new Set([x])
        console.log('visited', visited)
        let res = dfs(x, y)
        console.log('res', res)
        output.push(res)
    }

    function dfs(node, target) {
        if (node === target) return 1;
        let arr = obj[node];
        console.log('arr', arr)
        for (let [key, val] of arr) {
            if (!(visited.has(key))) {
                visited.add(key);
                console.log('kv', key, val)
                return dfs(key, target) * val
            }
            // for cases like when only one array is visited
        }
    }
    return output
};

const equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]]
const values = [3.0,4.0,5.0,6.0]
const queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
console.log(calcEquation(equations, values, queries))
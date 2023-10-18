// var minReorder = function (n, connections) {
//     // from: (<from city>, [<to cities>])
//     // to: (<to city>, [<from cities>])
//     const from = new Map(), to = new Map();

//     // Function to insert in values in map
//     const insert = (map, key, value) => {
//         if (map.has(key)) {
//             const arr = map.get(key);
//             arr.push(value);
//             map.set(key, arr);
//         } else {
//             map.set(key, [value]);
//         }
//     }

//     // Set all values in both maps
//     for (const [a, b] of connections) {
//         insert(from, a, b);
//         insert(to, b, a);
//     }

//     console.log(from ,to)
//     // Queue: cities to visit
//     const queue = [0], visited = new Set();
//     let count = 0;

//     while (queue.length) {
//         const cur = queue.shift(); // First element in queue

//         // Check values in first map
//         if (from.has(cur)) {
//             for (const x of from.get(cur)) {
//                 // If visited, do nothing else add to queue
//                 if (visited.has(x)) continue;
//                 queue.push(x);
//                 count++; // Change direction of this path
//             }
//         }

//         if (to.has(cur)) {
//             // If visited, do nothing else add to queue
//             for (const x of to.get(cur)) {
//                 if (visited.has(x)) continue;
//                 queue.push(x);
//             }
//         }

//         visited.add(cur); // Mark city as visited
//     }

//     return count
// };


var minReorder = function (n, connections) {
    // Create an object to store the neighbors of each city
    let neighbors = {};
    // Create an array to keep track of which cities can reach city 0
    const isZeroReachable = Array(n).fill(false);
    // City 0 can reach itself
    isZeroReachable[0] = true;

    // Initialize an empty array for each city in neighbors
    for (let city = 0; city < n; city++) neighbors[city] = [];

    for (const [sourceCity, destinationCity] of connections) {
        // Add the destination city to the array for the source city with the boolean value false
        // boolean tracks the direction of the connection
        neighbors[sourceCity].push([destinationCity, false]);
        // Add the source city to the array for the destination city with the boolean value true
        neighbors[destinationCity].push([sourceCity, true]);
    }
    console.log(neighbors)

    // Initialize the reorder count to 0 and call traverseCities with city 0
    let reorderCount = 0;
    traverseCities(0);

    // Return the reorder count
    return reorderCount;

    /**
     * @param {number} zeroReachableCity
     */
    function traverseCities(zeroReachableCity) {
        // Iterate over each neighbor of zeroReachableCity
        for (const [neighborCity, isSourceCity] of neighbors[zeroReachableCity]) {
            // If the neighbor is already reachable, continue to the next neighbor
            if (isZeroReachable[neighborCity]) continue;
            // If the connection is outgoing, increment reorderCount
            if (!isSourceCity) reorderCount++;
            // Mark the neighbor as reachable
            isZeroReachable[neighborCity] = true;
            // Recursively call traverseCities with the neighbor city as the new zeroReachableCity
            traverseCities(neighborCity);
        }
    }
};

const n = 6;
const connections = [[0,1],[1,3],[2,3],[4,0],[4,5]];
const res = minReorder(n, connections);
console.log(res);
var predictPartyVictory = function(senate) {
    let queue = senate.split('');
    let r = 0

    while (queue.length > 0 && Math.abs(r) < queue.length){
        let letter = queue.shift();
        if (letter === 'R' && r >= 0) {
            queue.push(letter)
            r++
        } else if (letter === 'D' && r <= 0) {
            queue.push(letter);
            r--;
        } else if (letter === 'R' && r < 0) {
            r++
        } else if (letter === 'D' && r > 0) {
            r--;
        }
        console.log(queue, r)
    }
    return queue[0] === "R" ? "Radiant" : "Dire"
};

const senate = "RDRDDD";
const res = predictPartyVictory(senate);
console.log(res)
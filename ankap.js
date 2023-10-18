var characterReplacement = function(s, k) {
    // Make a map of size 26...
    var map = []
    // Initialize largestCount, maxlen & beg pointer...
    let largestCount = 0, beg = 0, maxlen = 0;
    // Traverse all characters through the loop...
    for(let end = 0; end < s.length; end++){
        
        const c = s[end]
        map[c] = (map[c] || 0) + 1
        console.log('map', map)
        // Get the largest count of a single, unique character in the current window...
        largestCount = Math.max(largestCount, map[c])
        console.log('largestCount', largestCount)
        // We are allowed to have at most k replacements in the window...
        // So, if max character frequency + distance between beg and end is greater than k...
        // this means we have considered changing more than k charactres. So time to shrink window...
        // Then there are more characters in the window than we can replace, and we need to shrink the window...
        console.log('inner', end, beg, largestCount, k)
        if(end - beg + 1 - largestCount > k){     // The main equation is: end - beg + 1 - largestCount...
            map[s[beg]] -= 1
            beg += 1
        }
        // Get the maximum length of repeating character...
        maxlen = Math.max(maxlen, end - beg + 1);     // end - beg + 1 = size of the current window...
    }
    return maxlen;      // Return the maximum length of repeating character...
};

const s = "AABCABBBBBC"
const k = 3;
console.log(characterReplacement(s, k))
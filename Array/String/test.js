var productExceptSelf = function(nums) {
    let sufProduct = 1;
    let suf = [];

    for(let el of nums){
        sufProduct *= el;
        suf.push(sufProduct)
    }

    let postProduct = 1;
    let post = []
    
    for(let el of nums.reverse()){
        postProduct *= el;
        post.push(postProduct);
    }
    post = post.reverse()

    let final = [];
    for (let i=0; i<nums.length; i++){
        let p1 = (suf[i-1]) ? suf[i-1] : 1;
        let p2 = (post[i+1]) ? post[i+1] : 1;
        final.push(p1 * p2)
    }
    return final
};

const arr = [1,2,3,4];
const res = productExceptSelf(arr)
console.log(res)
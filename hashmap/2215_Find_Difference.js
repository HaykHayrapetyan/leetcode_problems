var findDifference = function(nums1, nums2) {
    let obj1 = {}
    let obj2 = {}
    for (let el of nums1) {
        obj1[el] = true
    }
    for (let el of nums2) {
        obj2[el] = true
    }

    for (let el of nums2) {
        if(el in obj1){
            obj1[el] = false
        } 
    }
    for (let el of nums1) {
        if(el in obj2){
            obj2[el] = false
        }
    }

    let newArr = new Set(Object.keys(obj1).filter((el) => obj1[el]))
    let newArr2 = new Set(Object.keys(obj2).filter((el) => obj2[el]))

    return [new Array(newArr), newArr2]
};

const nums1 = [1,2,3]
const nums2 = [2,4,6]
const res = findDifference(nums1, nums2)
console.log(res)
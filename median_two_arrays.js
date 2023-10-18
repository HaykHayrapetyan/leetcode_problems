var findMedianSortedArrays = function(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    let i = 0, j = 0;
    let arr = [];
    while(arr.length < l1+l2){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i])
            i++
        }else if(nums1[i] >= nums2[j]){
            arr.push(nums2[j])
            j++
        } 
        if(i >= l1){
            arr.push(...nums2.slice(j));
            break;
        }
        if(j >= l2){
            arr.push(...nums1.slice(i));
            break;
        }
    }
    console.log(arr)
    let l = arr.length
    const mid = Math.floor(l / 2)
    if (l % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        return arr[mid]
    }
};

const nums1 = [1, 2];
const nums2 = [3, 4];
const a = findMedianSortedArrays(nums1, nums2);
console.log(a);
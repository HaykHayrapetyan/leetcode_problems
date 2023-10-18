let binarySearch = function(arr, target){
    let i = 0;
    let j = arr.length-1;

    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(arr[mid] > target){
            j = mid-1;
        } else if(arr[mid] < target){
            i = mid+1;
        } else {
            while(mid >= 0 && arr[mid] === target) mid--;
            return ++mid;
        }
    }
}

const arr = [
    5, 11, 11, 11, 17, 17, 17, 17, 18, 18, 19, 19,
   19, 20, 20, 20, 22, 22, 22, 22, 22, 23, 24, 24,
   25, 25, 27, 27, 28, 28, 28, 28, 29, 29, 29, 30,
   31, 32, 32, 32, 33, 33, 33, 34, 34, 35, 35, 35,
   36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38,
   38, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40
 ]
const target = 5;
const res = binarySearch(arr, target);
console.log(res)

console.log([30,11,5,20,19,36,39,24,20,37,33,22,32,28,36,24,40,27,36,37,38,23,39,11,40,19,37,32,25,29,28,37,31,36,32,40,38,22,17,38,20,33,29,17,36,33,35,25,28,18,17,19,40,27,40,28,40,40,40,39,17,34,36,11,22,29,22,35,35,22,18,34].sort((a, b) => a-b))
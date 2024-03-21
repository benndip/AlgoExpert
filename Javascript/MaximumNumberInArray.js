function maximumNumberInArray(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

// [2,3,4,5,1,6,9]

console.log(maximumNumberInArray([2,3,9,5,1,6,4]));
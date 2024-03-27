function rotate(arr) {
    let rotatedArray = []
    for (let i = arr.length -1 ; i >= 0; i--) {
        rotatedArray = [...rotatedArray, arr[i]]
    }
    return rotatedArray
}

console.log(rotate([1,2,3,4,5,6,7]));
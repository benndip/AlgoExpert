
const sum = (arr) => {
    return arr.reduce((acc, curr)=>acc+curr,0)
}

// This is the easiest way to do this algorithm
const minMaxSum = (arr) => {
    console.log(sum(arr)-Math.max(...arr), sum(arr)-Math.min(...arr));
}

// This is a better way to do this algorithm
const minMaxSumBetter = (arr) => {
    let sum = 0
    let minNum = 999999999999999
    let maxNum = -99999999999999
    for(let i in arr){
        sum += arr[i]
        minNum = Math.min(minNum, arr[i])
        maxNum = Math.max(maxNum, arr[i])
    }
    console.log(sum-maxNum, sum-minNum)
}

minMaxSum([1,3,5,7,9])

minMaxSumBetter([1,3,5,7,9]) // The better one
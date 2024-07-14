const birthdayCakeCandles = (arr) => {
    let maxNum = 0
    let count = 0
    for(let i in arr){
        if (arr[i] > maxNum){
            maxNum = arr[i]
            count = 1
        }
        else if (arr[i] == maxNum)
            count = count + 1
    }
    console.log(count)
}

birthdayCakeCandles([3,2,1,3])

const averageOfNumbers = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i]; 
    }
    return sum/arr.length;
}

let numbers = [3,5,7,1,8,0,4]

console.log(averageOfNumbers(numbers));

// 
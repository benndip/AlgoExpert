
const sumOfNumbers = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i]; 
    }
    return sum
}

let numbers = [1,5,4]

console.log(sumOfNumbers(numbers));

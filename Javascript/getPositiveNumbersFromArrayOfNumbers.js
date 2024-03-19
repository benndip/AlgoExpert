

const getPositiveNumbersOnly = (arr) => {
    
    let results = []
   for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        results = [...results, arr[i]]
    }
   }
   return results
}

let numbers = [-3,5,7,-1,8,0,-4]

console.log(getPositiveNumbersOnly(numbers));
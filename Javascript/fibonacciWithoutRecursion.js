// f(n-1) + f(n-2) = f(n)
//0 1 1 2 3 5 8 13 21 34

const fibo = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
        if(i>1)
            result = [...result, (result[i-1] + result[i-2])]
        else
            result = [...result, i]      
    }
    return result.join(',');
}

console.log(fibo(10));
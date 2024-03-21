const fibo = (n) => {
    while (n >= 0){
        if(n==1)
            return 0
        if(n==2)
            return 1
        else
            return fibo(n-1) + fibo(n-2)
    }
    console.log("No fibonacci for negative numbers");
}

console.log(fibo(7));
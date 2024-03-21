function isPrime(n) {
    let i=2
    while(i>=2 && i<=Math.sqrt(n)) {
        if(n%i == 0)
            return false
        i++
    }
    return true
}

console.log(isPrime(11));
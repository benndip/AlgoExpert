function isPrime(n) {
    let i=2
    while(i>=2 && i<=Math.sqrt(n)) {
        if(n%i == 0)
            return false
        i++
    }
    return true
}

const first100PrimeNumbers = () => {
    let i = 1
    let primeNumbers = []
    while(primeNumbers.length <= 100){
        if(isPrime(i)){
            primeNumbers = [...primeNumbers, i]
        }
        i++
    }
    console.log(primeNumbers)
}

first100PrimeNumbers()
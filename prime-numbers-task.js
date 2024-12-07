function findPrimes(n, m) {
    // function to check if a number is prime
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++){
            if(num % i === 0) return false;
        }
        return true;
    }

    // Array to store prime numbers
    let primes = [];

    for (let i = n; i <= m; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(primes.join(' '));
}

findPrimes(0, 20)
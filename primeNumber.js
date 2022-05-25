function isPrime(n) {
    if (n === 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Big O Notation: O(n)

// "**********************************************"

function isPrimeOptimized(n) {
    if (n === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("**********************************************")
console.log(isPrimeOptimized(1)) // false
console.log(isPrimeOptimized(5)) // true
console.log(isPrimeOptimized(4)) // false

// Big O Notation: O(sqrt(n))
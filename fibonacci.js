function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) { // for loop
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2))// [0,1]
console.log('*************************')
console.log(fibonacci(3))// [0,1, 1]
console.log('*************************')
console.log(fibonacci(7))// [0,1, 1, 2, 3, 5, 8]

// Big O Notation: O(n)
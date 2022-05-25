function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0))// 1
console.log(factorial(1))// 1
console.log(factorial(5))// 5

// Big O Notation: O(n)
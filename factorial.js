// Factorial of large numbers with full digit print

const factorial = (number) => {
    if (number < 2n) {
         return 1n;
    } else {
        return number * factorial(number - 1n);
    }
}

console.log(String(factorial(BigInt(100)))); 

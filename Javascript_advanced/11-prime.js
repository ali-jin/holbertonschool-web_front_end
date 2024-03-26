/**
 * Check if the number is prime.
 * @param {number} number - the number to check.
 * @returns {boolean} - return true or false.
 */
function isPrime(number) {
    let limit = Math.floor(Math.sqrt(number));

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Count the number of prime numbers between 2 and 100.
 * @returns {number} - number of prime numbers.
 */
function countPrimeNumbers() {
    let count = 0;

    for (let index = 2; index <= 100; index++) {
        if (isPrime(index)) {
            count++;
        };
    }

    return count;
}

let startTime = performance.now();

for (let index = 0; index < 100; index++) {
    setTimeout(countPrimeNumbers, 0);
}

setTimeout(() => {
    let endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0)
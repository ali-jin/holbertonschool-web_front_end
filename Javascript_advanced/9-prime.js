/**
 * Check if the number is prime.
 * @param {number} number - the number to check.
 * @returns {boolean} - return true or false.
 */
function isPrime(number) {
    var count = 0;
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            count = count + 1;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
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
countPrimeNumbers();
let endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
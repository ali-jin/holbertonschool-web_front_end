/**
 * A function that return a number divided by firstNumber.
 * @param {number} firstNumber - Divisor
 * @returns {Function} - Division function
 */
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    }
}

/**
 * A function that return the sum of firstNumber and secondNumber.
 * @param {number} firstNumber - Numeber to add the secondNumber.
 * @returns {Function} - An addition function.
 */
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
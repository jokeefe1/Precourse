// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
    // return the factorial for n
    // example:
    // the factorial of 3 is 6 (3 * 2 * 1)
    return n < 2 ? 1 : n * nFactorial(n - 1);
}

function nFibonacci(n) {
    // fibonacci sequence: 1 2 3 5 8 13 ...
    // return the nth number in the sequence
    if (n < 2) {
        return 1;
    }

    let num1 = n - 1;
    let num2 = n - 2;

    return nFactorial(num1) + nFactorial(num2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
    nFactorial,
    nFibonacci
};

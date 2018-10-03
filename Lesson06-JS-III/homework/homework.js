// Do not change any of the function names

function returnFirst(arr) {
    // return the first item from the array
    const [first] = arr;
    return first;
}

function returnLast(arr) {
    // return the last item of the array
    return arr.slice(-1)[0];
}

function getArrayLength(arr) {
    // return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
    // arr is an array of integers
    // increase each integer by one
    // return the array
    return arr.map(num => num + 1);
}

function addItemToArray(arr, item) {
    // add the item to the end of the array
    // return the array
    return [...arr, item];
}

function addItemToFront(arr, item) {
    // add the item to the front of the array
    // return the array
    // hint: use the array method .unshift
    return [item, ...arr];
}

function wordsToSentence(words) {
    // words is an array of strings
    // return a string that is all of the words concatenated together
    // spaces need to be between each word
    // example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
    // check to see if item is inside of arr
    // return true if it is, otherwise return false
    return arr.includes(item) ? true : false;
}

function addNumbers(numbers) {
    // numbers is an array of integers.
    // add all of the integers and return the value
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function averageTestScore(testScores) {
    // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    const result = testScores.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    return result / testScores.length;
}

function largestNumber(numbers) {
    // numbers is an array of integers
    // return the largest integer
    const largest = numbers.sort((a, b) => b - a);
    return largest[0];
}

function multiplyArguments() {
    // use the arguments keyword to multiply all of the arguments together and return the product
    // if no arguments are passed in return 0
    // if one argument is passed in just return it
    if (arguments.length === 0) {
        return 0;
    } else {
        let result = Array.from(arguments).reduce((prev, curr) => {
            return prev * curr;
        }, 1);
        return result;
    }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber,
    multiplyArguments
};

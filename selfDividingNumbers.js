// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// 31 / 31 test cases passed.
// Status: Accepted
// Runtime: 68 ms
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
*/
var selfDividingNumbers = function (left, right) {
    const nums = [];

    const isSelfDividing = (num) => {
        const numbers = num.toString().split('');
        if (numbers.includes('0')) {
            return false;
        }

        return numbers.every(n => num % parseInt(n, 10) === 0);
    }

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            nums.push(i);
        }
    }

    return nums;
};

console.log(selfDividingNumbers(1, 22));
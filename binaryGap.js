//Write a function that, given a positive integer N, returns the length of its longest binary gap. 
//The function should return 0 if N doesn't contain a binary gap.

function binaryGap (n) {
    let num = (n >>> 0).toString(2).split('');
    console.log(num)
    let count = [0];

    num.forEach(item => {

        if (item === "0") {
            count[count.length - 1]++;
        } else if (item === "1" && count[count.length - 1] !== 0) {
            count.push(0);
        }
    });
    return Math.max(...count);
}

console.log(binaryGap(5));
console.log(binaryGap(56502));
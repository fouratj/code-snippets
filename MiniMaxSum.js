//HackerRank

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
// four of the five integers. Then print the respective minimum and maximum values as a single line of two 
// space-separated long integers.

function main(arr) {
    let sums = [];
    
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.shift(); //since array is always 5 elements, pop/store 1st element in var
        let sum = arr.reduce( (pre, curr) => (pre + curr), 0); //calculate the sums of 4
        sums.push(sum); // store sum
        arr.push(temp); // put stored elem at end of array
    }
    
    console.log(Math.min(...sums), Math.max(...sums)) ;
}

main([1,2,3,4,5]);
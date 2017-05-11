//A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, 
//and each element of the array can be paired with another element that has the same value, except for one element 
//that is left unpaired.
// Write a function that, given an array A consisting of N integers fulfilling the above conditions, 
// returns the value of the unpaired element.

const array = [9, 4, 9, 3, 9, 7, 7, 4];

function solution(A) {
    let l = A.length;

    for (let i = 0; i < l; i++) {
        let current = A[i];
        let matching = A.filter( item => item === current);

        if (matching.length === 1) 
            return current;
        
    }

}

console.log(solution(array));
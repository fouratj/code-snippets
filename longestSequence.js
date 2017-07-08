//Codility 
// Longest Harmonious Sequence
// 201 / 201 test cases passed.
// Status: Accepted
// Runtime: 369 ms

// We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

// Example 1:
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

var findLHS = function(nums) {
    if (!nums.length) return 0;

    let count = 0, l = nums.length;

    nums = nums.sort( (a,b) => (a - b));
    
    for (let i = 0; i < l; i++ ) {
        let curr = nums[i], answers = [];
        
        for (let j = i; j < l; j++ ) { //since loop is sorted, starts only at i saving compute cycles
            let jurr = nums[j];
            
            if ( curr === jurr || curr + 1 === jurr) {
                answers.push(jurr);
            } else { //as soon as current iteration of loop is more than 1 greater than curr, breaks to save compute cycles
                break;
            }  
        }

        if (answers.length > count && !answers.every(item => (item === answers[0])) ) //second conditional ensures there is at least one variant in the cycle, ie, not all the same
            count = answers.length;
            
        answers = [];
    }
    
    return count;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
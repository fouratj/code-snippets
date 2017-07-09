// Codility
// K-diff Pairs in an Array

// 72 / 72 test cases passed.
// Status: Accepted
// Runtime: 1105 ms

// Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
// Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and 
// their absolute difference is k

var findPairs = function(nums, k) {
    if (nums.length === 0) return 0;
    
    let l = nums.length;
    let pairs = new Set(), visited = new Set();
    
    nums = nums.sort( (a,b) => (a - b));
            
    for (let i = 0; i < l; i++) {
        let curr = nums[i];
        
        if (visited.has(curr)) continue;
        for (let j = i + 1; j < l; j++) {

            let jurr = nums[j];            
            
            if (curr - jurr > k) break;
            
                        
            if (Math.abs(curr - jurr) === k) 
                pairs.add(curr + jurr);

        }
        
        visited.add(curr);
    }
    
    return pairs.size;
    
};
// Codility 

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// 34 / 34 test cases passed.
// Status: Accepted
// Runtime: 302 ms

const nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums) {
    let l = nums.length,
        myset = new Set(nums),
        results = [];

    for (let i = 1; i < l; i++) {
        if (!myset.has(i)) 
            results.push(i);
    }

    return results;
}

console.log(findDisappearedNumbers(nums));
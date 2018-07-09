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

  let l = nums.length, //cache array length
    pairs = new Set(), // cache unique values that add upto k (1 + 3) & (3 + 1) only count as one
    visited = new Set(); // cache already visited numbers in outer loop

  nums = nums.sort((a, b) => a - b); // sort numbers so only specific range need be traversed at a time

  for (let i = 0; i < l; i++) {
    let curr = nums[i];

    if (visited.has(curr)) continue; //if value has already been traversed, skips all further iteration for this value

    for (let j = i + 1; j < l; j++) {
      let jurr = nums[j];

      if (curr - jurr > k) {
        // once diff becomes greater than K, breaks inner loop
        break;
      }
      if (Math.abs(curr - jurr) === k) {
        pairs.add(curr + jurr);
      }
    }

    visited.add(curr); //adds value to visited so never has to be repeated
  }

  return pairs.size;
};

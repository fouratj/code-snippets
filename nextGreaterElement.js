// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
// If it does not exist, output -1 for this number.

var nextGreaterElement = function(findNums, nums) {
  var answers = [],
    l = nums.length;

  findNums.forEach(num => {
    let index = nums.findIndex((item, index) => num == item);

    let newArr = [];
    let elem;

    if (index !== -1) {
      newArr = nums.slice(index + 1);
      elem = newArr.find(item => num < item) || -1;
    } else {
      elem = index;
    }

    answers.push(elem);
  });

  return answers;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

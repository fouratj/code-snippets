var myArray = [4, 142, 10, 7, 6, [8, 9, 19, [4, 333, -11]], [4, 2, 88]];

const recursivelyPrint = (nums, prevSmallNum = undefined) => {
  let smallestNum = prevSmallNum;
  nums.forEach(num => {
    if (num instanceof Array) {
      smallestNum = recursivelyPrint(num, smallestNum);
      return;
    }

    if ((!smallestNum && smallestNum !== 0) || num < smallestNum) {
      smallestNum = num;
    }
  });

  return smallestNum;
};

const smallestNum = recursivelyPrint(myArray);

console.log(`Smallest Number is ${smallestNum}`);

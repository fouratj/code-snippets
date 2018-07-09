// A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.

function solution(A) {
  let l = A.length;

  if (A.length === 0) return -1;

  for (let i = 1; i <= l; i++) {
    let curr = A[i],
      pre = A[i - 1];

    if (curr - pre !== 1) {
      return curr - 1;
    }
  }
}

console.log(solution([1, 2, 3, 4, 5, 7]));

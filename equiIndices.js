// A zero-indexed array A consisting of N integers is given. An equilibrium index of this array is any integer P such that 0 ≤ P < N and the sum of elements of lower indices is equal to the sum of elements of higher indices, i.e.
// A[0] + A[1] + ... + A[P−1] = A[P+1] + ... + A[N−2] + A[N−1].
// Sum of zero elements is assumed to be equal to 0. This can happen if P = 0 or if P = N−1.

function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  let n = A.length;
  let equiIndices;

  if (A.length == 1) {
    return 0;
  }

  for (let x = 0; x < n; x++) {
    let a = A.slice(0, x).reduce((pre, curr) => pre + curr, 0);
    let b = A.slice(x + 1).reduce((pre, curr) => pre + curr, 0);

    if (a === b) {
      equiIndices = x;
      break;
    }
  }

  return equiIndices || -1;
}

let arr = [-1, 3, -4, 5, 1, -6, 2, 1];
console.log(solution(arr));

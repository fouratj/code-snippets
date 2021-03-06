// Write a function:
// function solution(A, B, K);
// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }
// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
// Assume that:
// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B

function solution(A, B, K) {
  let arr = [];

  for (let i = A; i <= B; i++) {
    if (i % K === 0) arr.push(i);
  }

  return arr.length;
}

console.log(solution(1, 10, 3));

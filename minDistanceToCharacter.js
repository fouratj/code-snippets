// 76 / 76 test cases passed.
// Status: Accepted
// Runtime: 76ms
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const strings = S.split('');
  const charPositions = {}; // stores all occurences of C's index
  let keys = []; // store charPositions as array
  const ans = []; // store answers

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === C) {
      charPositions[i] = i;
    }
  }

  keys = Object.keys(charPositions);

  for (let i = 0; i < strings.length; i++) {
    let minDist = 0;
    for (let j = 0; j < keys.length; j++) {
      let temp = Math.abs(i - keys[j]);
      if (j === 0) {
        minDist = temp;
      }

      if (temp < minDist) {
        minDist = temp;
      }
    }
    ans.push(minDist);
  }

  return ans;
};

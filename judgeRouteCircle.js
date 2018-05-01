// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a circle.

// 62 / 62 test cases passed.
// Status: Accepted
// Runtime: 64 ms

/**
 * @param {string} moves
 * @return {boolean}
*/
var judgeCircle = function (moves) {
  let initialPos = [0, 0];

  moves.split('').forEach(m => {
    switch (m) {
      case 'U':
        initialPos[0] += 1;
        break;
      case 'D':
        initialPos[0] -= 1;
        break;
      case 'L':
        initialPos[1] += 1;
        break;
      case 'R':
        initialPos[1] -= 1;
        break;
      default:
        break;
    }
  });

  if (initialPos.every(pos => pos === 0)) {
    return true;
  }
  return false;
};

console.log(judgeCircle('UUDDLLRR'));
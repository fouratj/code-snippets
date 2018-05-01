/**
 * @param {string} moves
 * @return {boolean}
*/
var judgeCircle = function (moves) {
  let initialPos = [0, 0]
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
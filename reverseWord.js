var reverseWords = function(s) {
  return s
    .split(' ')
    .map(word => {
      return word
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
};

console.log(reverseWords("Let's code"));
console.log(reverseWords('Code away my main man'));

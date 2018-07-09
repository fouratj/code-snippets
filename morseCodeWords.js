// 83 / 83 test cases passed.
// Status: Accepted
// Runtime: 56 ms

var uniqueMorseRepresentations = function(words) {
  const wordsInMorse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };
  const transformations = [];

  words.forEach(w => {
    const word = w.split('');
    let wordInMorse = '';
    word.forEach(wo => {
      wordInMorse += wordsInMorse[wo];
    });
    transformations.push(wordInMorse);
  });

  return transformations.filter((t, i, arr) => {
    return i === arr.indexOf(t);
  }).length;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));

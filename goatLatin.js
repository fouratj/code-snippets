// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
 
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
 
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

// 99 / 99 test cases passed.
// Status: Accepted
// Runtime: 60 ms

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const goatLatin = [];
  const vowels = {
      a: 'a',
      e: 'e',
      i: 'i',
      o: 'o',
      u: 'u',
  };
  
  const vowelCheck = char => vowels[char.toLowerCase()];
  const addAs = (string, numOfA) => {
      let newWord = string;
      for (let j = 1; j <= numOfA; j++) {
          newWord = newWord + 'a';
      }
      return newWord;
  }

  S.split(' ').forEach((word, i) => {
      let newWord;

      if (vowelCheck(word[0])) {
          newWord = word + 'ma';
      } else {
          newWord = word.slice(1) + word[0] + 'ma';
      }
      
      newWord = addAs(newWord, i + 1);

      goatLatin.push(newWord);
  });
  return goatLatin.join(' ');
};
//CHALLENGE
//Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard

let inTopRow = (item) => (["q","w","e","r","t","y","u","i","o","p"].includes(item));
let inMidRow = (item) => (["a","s","d","f","g","h","j","k","l"].includes(item));
let inBottomRow = (item) => (["z","x","c","v","b","n","m"].includes(item));

var findWords = function(words) {
    let answers = [];

    words.forEach(word => {
        let arr = word.split('').map(item => item.toLowerCase());
                    
        if (arr.every(inTopRow) || arr.every(inMidRow) || arr.every(inBottomRow)) 
            answers.push(word);
    });

    return answers;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["a","b"]));
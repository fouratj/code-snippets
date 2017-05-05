const fizzBuzz = function (n) {
    let data = [];
    
    for (let i = 1; i <= n; i++ ) {
        if ( i % 3 === 0 && i % 5 !== 0) {
            data.push('Fizz');
        } else if ( i % 5 === 0 && i % 3 !== 0) {
            data.push('Buzz');
        } else if ( i % 15 === 0 ) {
            data.push('FizzBuzz');
        } else {
            data.push(i.toString());
        }
    }  
    return data;
     
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(15));
console.log(fizzBuzz(100));

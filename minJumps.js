

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 6.4.0)
    let count = 0;
    
    if (X > Y ) return 0;
    
    while ( X < Y) {
        X = X + D;
        count++;
    }
    
    return count;
}

console.log(solution(10, 0, 30));
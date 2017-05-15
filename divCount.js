

function solution(A, B, K) {
    let arr = [];
    
    for (let i = A; i <= B; i++) {
        
        if (i % K === 0) arr.push(i);
        
    }
    
    return arr.length;
}

console.log(solution(1, 10, 3))
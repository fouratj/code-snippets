

function processData(input) {
    input = input.split('\n');
    let n = input[0];
    let arr = input[1].split(' ').map(Number)

    for (let i = 1; i < n; i++) {
        let curr = arr[i], prev = arr[i - 1];
        
        if ( arr[i - 1] > arr[i] ) {
            let curr = arr[i];
            
            for (let j = i; j > 0; j--) {
                
                if ( arr[j - 1 ] > curr ) {
                    arr[j] = arr[j-1];
                } else {
                    arr[j] = curr;
                }
                
                
            }
            
        }
        
        console.log(...arr);   
    }
} 

//Hacker Rank

//Insertion Sort - Part 2
// 5/5 Test cases passed

// In Insertion Sort Part 1, you sorted one element into an array. Using the same approach repeatedly, can you sort an entire 
// unsorted array?

// Guideline: You already can place an element into a sorted array.
//  How can you use that code to build up a sorted array, one element at a time? Note 
//  that in the first step, when you consider an array with just the first element - that is already "sorted" since there's nothing to its left that is smaller.

// In this challenge, don't print every time you move an element. Instead, print
//  the array after each iteration of the insertion-sort, i.e., whenever the next 
//  element is placed at its correct position.

// Since the array composed of just the first element is already "sorted",
//  begin printing from the second element and on.

function processData(input) {
    input = input.split('\n');
    let n = input[0];
    let arr = input[1].split(' ').map(Number)

    for (let i = 1; i < n; i++) {
        let curr = arr[i], prev = arr[i-1];  
        
        if ( prev > curr ) {

            for (let j = i; j >= 0; j--) {
                
                if (arr[j - 1] > curr) {
                    arr[j] = arr[j-1]; 
                } else {
                    arr[j] = curr;
                    break;
                }
                                
            }
            
        }
        
        console.log(...arr);
          
    }
} 

processData(
`6
1 4 3 5 6 2`)

processData(
`9
9 8 6 7 3 5 4 1 2`
)
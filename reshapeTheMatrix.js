// LeetCode
// Reshape the Matrix
// 56 / 56 test cases passed.
// Status: Accepted
// Runtime: 225 ms

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing 
// the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing
//  order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; 
// Otherwise, output the original matrix.

var matrixReshape = function(nums, r, c) {
    if ( nums.length === 0 || (r * c) !== (nums.length * nums[0].length) ) {
        return nums;
    }
    
    let array = new Array(r);
    let tempArr = [];
        
    //create flat array to preseve original order
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) 
            tempArr.push(nums[i][j]); 
    }
    

    for (let i = 0; i < r; i++) {
        if (!array[i]) 
            array[i] = [];
        
        for (let j = 0; j < c; j++)    
            array[i][j] = tempArr.shift(); 
    }

    return array;
};

console.log(matrixReshape([[1,2],[3,4]], 1, 4)); // will transform
console.log(matrixReshape([[1,2],[3,4]], 2, 4)); // will return original
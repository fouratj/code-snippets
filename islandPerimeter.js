//0 = Sea, 1 = Land
//Find the perimeter of the single, unbroken island
//Assume the whole array is surrounded by sea [0]s

const grid = [[0,1,0,0,0],
              [1,1,1,0,0],
              [0,1,1,0,0],
              [1,1,0,0,0]]

function checkHorizonalPerimeter (row) {
    let perimeter = 0, l = row.length - 1;

    row.forEach( (curr, index, arr) => {
        let prev = arr[index - 1] || 0;
        let next = arr[index + 1] || 0;
        
        if (curr && (!prev && !next)) { //lone island with sea on both sides
            perimeter += 2;
        } else if ( curr && ((prev && !next) || (!prev && next)) ) { //multiple land with sea on either/or side
            perimeter += 1;
        }  
    });

    return perimeter;
}

function checkVerticalPerimeter (row, rowIndex) {
    let perimeter = 0, l = row.length;

    row.forEach( (curr, colIndex, arr) => {
        if (curr === 1) {
            let top = getPartner(rowIndex - 1, colIndex);
            let bottom = getPartner(rowIndex + 1, colIndex);

            if ( !top && !bottom ) {
                perimeter += 2;
            } else if ( (top && !bottom ) || (!top && bottom) ) {
                perimeter += 1;
            }
        }
    });

    return perimeter;
}

function getPartner (rowIndex, colIndex) {
    // checks to see if rowIndex exists first as it sometimes wont if index on original row was first or last index of array
    // which will make it out of bouns.
    if ( grid[rowIndex] && grid[rowIndex][colIndex] === 1 ) {
        return true;
    }

    return false;
}
          
var islandPerimeter = function(grid) {
    let perimeter = 0;

    grid.forEach( (row, index, arr) => {

        let per = checkHorizonalPerimeter(row); //checks row/horizontal dimension
        perimeter += parseInt(per);
        per = checkVerticalPerimeter(row, index);//checks col/vertical dimension
        perimeter += parseInt(per);
    });
    
    return perimeter;
};

console.log(islandPerimeter(grid));
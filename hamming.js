const hammingDistance = function(x, y) {
    let binaryX = (x >>> 0).toString(2).split('');
    let binaryY = (y >>> 0).toString(2).split('');
    let equal = 0;
    for (let i = 0; i < binaryX.length; i ++) {
        if (binaryX[i] != binaryY[i])
            equal++;
    }
    return equal;
};

console.log(hammingDistance(6, 4));
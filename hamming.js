function padding(s, size) {
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}

var hammingDistance = function(x, y) {
    let binaryX = padding((x >>> 0).toString(2), 32).split('');
    let binaryY = padding((y >>> 0).toString(2), 32).split('');
    let equal = 0;
    
    for (let i = 0; i <= binaryX.length; i ++) {
        if (binaryX[i] != binaryY[i])
            equal++;
    }
    return equal;
};

console.log(hammingDistance(4, 1));
console.log(hammingDistance(90, 44));
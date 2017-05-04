var findComplement = function(num) {
    var number = (num >>> 0).toString(2)
                            .split("")
                            .map( item => ((item === '0') ? '1' : '0'))
                            .join('');
    
    return parseInt(number, 2);
};

console.log(findComplement(2));
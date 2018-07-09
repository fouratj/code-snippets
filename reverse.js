const reverse = function(x) {
  x = x.toString().split('');
  var bool = x[0].includes('-') ? true : false;
  var x = parseInt(x.reverse().join(''));

  if (bool) x = -x;

  return x || 0;
};

console.log(reverse(123456789));
console.log(reverse(-45645));

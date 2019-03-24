module.exports = function getZerosCount(number, base) {
  // your implementation

  let dividers = [];

  for (let i = 2; i <= base; i++) {
    let div  = 0;
    while (base % i == 0) {
      base /= i;
      div++;
      dividers[i] = div;
    }
  }

  let min = number;

  dividers.forEach(function(i, pos, dividers) {
    let num = number;
    let count = 0;
    while (num > 0) {
      num = Math.floor(num / pos);
      count += num;
    }
    if(Math.floor( count / dividers[pos]) < min) min = Math.floor( count / dividers[pos]);
  });
  return min;
}
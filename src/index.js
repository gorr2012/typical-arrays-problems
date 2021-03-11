exports.min = function min (array) {
  return (!array || array.length === 0) ? 0 : array.sort((a, b) => { return a - b })[0];
}

exports.max = function max (array) {
  return (!array || array.length === 0) ? 0 : array.sort((a, b) => { return a - b })[array.length-1];
}

exports.avg = function avg (array) {
  return (!array || array.length === 0) ? 0 : Math.round(array.reduce((sum, cur) => {return sum + cur})/(array.length)*100)/100;
} 

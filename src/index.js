exports.min = function min (array) {
  if(!array || array.length === 0) return 0;
  array.sort((a, b) => { return a - b });
  return array[0];
}

exports.max = function max (array) {
  if(!array || array.length === 0) return 0;
  array.sort((a, b) => { return a - b });
  return array[array.length-1];
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) return 0;
  let res = array.reduce((sum, cur) => {return sum + cur});
  return Math.round(res/(array.length)*100)/100;
} 

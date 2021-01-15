exports.min = function min (array) {
  if(!array || array.length === 0) return 0;
  array.sort(function(a, b) { return a - b; });
  return array[0];
}

exports.max = function max (array) {
  if(!array || array.length === 0) return 0;
  array.sort(function(a, b) { return a - b; });
  return array[array.length-1];
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) return 0;
  let res = 0;
	for (let i = 0; i < array.length; i++) {
		res += Number(array[i]);
	}
  return Math.round(res/(array.length)*100)/100;
} 

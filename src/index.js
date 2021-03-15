
exports.min = function min (array) {
  if (array == 0 || array === undefined) {
    return 0;
  }
  return Math.min.apply(null,array);
}

exports.max = function max (array) {
  if (array == 0 || array === undefined) {
    return 0;
}
  return Math.max.apply(null,array);
}
exports.avg = function avg (array) {
  if (array == 0 || array === undefined) {
    return 0;
}
  return array.reduce((a,b) => a + b) / array.length;
}

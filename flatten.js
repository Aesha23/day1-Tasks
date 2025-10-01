function flat(arr) {
  var out = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        out[out.length] = arr[i][j];
      }
    } else {
      out[out.length] = arr[i];
    }
  }
  return out;
}

console.log(flat([1, 2, [5, 4], 3, [5], [93, 8, 2]]));
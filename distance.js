function hammingDistance(x, y) {
  let xor = x ^ y;
  let binary = xor.toString(2);
  let count = binary.split('1').length - 1;
  console.log(count);
}

hammingDistance(1, 4);
hammingDistance(3, 1); 
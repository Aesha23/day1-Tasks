function flowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1
      n--
    }
  }
  return n === 0
}
console.log(flowers([1,0,0,0,1], 1)) 
console.log(flowers([1,0,0,0,1], 2)) 

function maximalRectangle(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const cols = matrix[0].length;
  const heights = Array(cols).fill(0);
  let maxArea = 0;

  for (const row of matrix) {

    for (let i = 0; i < cols; i++) {
      heights[i] = row[i] === 1 ? heights[i] + 1 : 0;
    }
    maxArea = Math.max(maxArea, getLargestArea(heights));
  }

  return maxArea;
}

function getLargestArea(heights) {
  const stack = [];
  let maxArea = 0;
  const extended = [...heights, 0]; 

  for (let i = 0; i < extended.length; i++) {
    while (stack.length && extended[i] < extended[stack[stack.length - 1]]) {
      const height = extended[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
}
function getValue(value) {
  const error = "enter a valid shape";
  switch (value.shape) {
    case "circle":
      return 3.14 * value?.radius ** 2;
    case "rectangle":
      return value?.length * value?.width;
    case "square":
      return value?.length**2;
    case "triangle":
      return 0.5 * value?.base * value?.height;
    default:
      return error;
  }
}

console.log(getValue({
  shape: "circle",
  value: "area",
  radius: 23
}));

console.log(getValue({
  shape: "rectangle",
  value: "area",
  length: 12,
  width:10
}));

console.log(getValue({
  shape: "square",
  value: "area",
  length: 12,
}));

console.log(getValue({
  shape: "triangle",
  value: "area",
  base: 12,
  height:18
}));
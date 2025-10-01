function rotate(value,k) {
    let  n = value.length;
    k = k % n;

    let rotate = value.slice(-k).concat(value.slice(0, n-k));
    return rotate;

}

let value = [1,2,3,4,5,6,7];
let k = 4;
console.log(rotate(value,k));
function removeduplicates(nums) {
    let j = [...new Set(nums)];
    for (let i = 0; i<j.length; i++ ) nums[i] = j[i];
    nums.length = j.length;
    return j.length;
}

let nums=[1,2,1,2,3,4];
let k = removeduplicates(nums);
console.log("k =",k,"nums =",nums)
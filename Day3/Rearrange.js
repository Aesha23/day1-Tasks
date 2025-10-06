function rearrange(nums) {
     const pos = [];
     const neg = [];
    
     for(let num of nums){
        if(num > 0) pos.push(num);
        else neg.push(num);
     }

     if (pos.length === 0 || neg.length === 0) {
    return nums;
    }
    const result = [];
    let i = 0;

    while (i < pos.length && i < neg.length) {
    result.push(pos[i]);
    result.push(neg[i]);
    i++;
  }

  while (i < pos.length) result.push(pos[i++]);
  while (i < neg.length) result.push(neg[i++]);

  return result;
}

console.log(rearrange([-5, -1, -3, -5, 9, -8])); 

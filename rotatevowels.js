function rotateVowels(s) {
    const vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let vowelsArr = arr.filter(c => vowels.includes(c)).reverse();

    return arr.map(c => vowels.includes(c) ? vowelsArr.shift() : c).join("");

}

    console.log(rotateVowels("IceCreAm"));
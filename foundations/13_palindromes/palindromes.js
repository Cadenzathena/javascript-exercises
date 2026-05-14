const palindromes = function (string) {
    let cleansedString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, "");
    cleansedString = cleansedString.replace(/ /g, "");
    
    const stringPartOne = cleansedString.slice(0, Math.floor(cleansedString.length / 2))
    const stringPartTwo = cleansedString.slice(Math.ceil(cleansedString.length / 2), string.length)
        .split('')
        .reverse()
        .join('')

    return stringPartOne === stringPartTwo ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution 1 - using regular expressions
function vowels(str) {
    // return str.replace(/[^AEIOU,aeiou]/g, '').length;
    return str.replace(/[^aeiou]/gi, '').length;
}

module.exports = vowels;

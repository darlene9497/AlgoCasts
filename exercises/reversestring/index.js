// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1 - use the reverse keyword
function reverse(str) {
    return str.split('').reverse().join('');
}

// solution 2 - make use of the for loop
// function reverse(str) {
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed
//     }
//     return reversed;
// }

// solution 3 - reduce helper
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;

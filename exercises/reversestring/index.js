// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {}

// String Reversal, Solution #3
function reverse(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev;
    }, '');
}


module.exports = reverse;


// String Reversal, Solution #2
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }


// String Reversal, Solution #1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');

// }

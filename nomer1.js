// nomer 1
const reverseWord = (word) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const chars = word.split('');
    const reversedChars = chars.filter(char => alphabet.includes(char)).reverse();
    const numbers = chars.filter(char => !isNaN(parseInt(char))).join('');
    return reversedChars.join('') + numbers;
};

const input = 'NEGIE1'
const output = reverseWord(input)
console.log(output)
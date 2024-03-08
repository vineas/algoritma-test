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



// nomer 2
const longestSentence = (sentence) => {
    const words = sentence.split(" ");
    let longestWord = "";
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord.length;
};

const randomSentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestSentence(randomSentence));



// nomer 3
const countWords = (input, query) => {
    const counts = query.map(word => input.filter(item => item === word).length)
    return counts
};

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']

const result = countWords(input, query)
console.log(result)



// nomer 4
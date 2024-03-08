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




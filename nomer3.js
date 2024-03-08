// nomer 3
const countWords = (input, query) => {
    const counts = query.map(word => input.filter(item => item === word).length)
    return counts
};

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']

const result = countWords(input, query)
console.log(result)

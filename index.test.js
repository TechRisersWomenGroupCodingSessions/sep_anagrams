const fs = require('node:fs');
const is_anagram = require('./index');


async function getWords() {
    const retrievedWords = await fs.readFile('words.txt', 'utf8', (err, data) => {
        if (err) {
          console.error("got error", err);
          return;
        }
        console.log("no error", data)
        return data;
      });
} 


test('is anagram', () => {
    expect(is_anagram("kinship", "pinkish")).toBe(true);
});

test('is not anagram due to length', () => {
    expect(is_anagram("kinship", "pinkishhh")).toBe(false);
});

test('is not anagram due to different char', () => {
    expect(is_anagram("kinship", "pinkisx")).toBe(false);
});

test('can retrieve the word list', async () => {
    const myWords = await getWords();
    expect(myWords.toBeDefined());

}

)


const is_anagram = require('./index');

test('is anagram', () => {
    expect(is_anagram("kinship", "pinkish")).toBe(true);
});

test('is not anagram due to length', () => {
    expect(is_anagram("kinship", "pinkishhh")).toBe(false);
});

test('is not anagram due to different char', () => {
    expect(is_anagram("kinship", "pinkisx")).toBe(false);
});
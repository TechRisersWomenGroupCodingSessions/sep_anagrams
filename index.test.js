const get_anagram = require('./index');

test('test setup correct', () => {
    expect(get_anagram()).toBe("a");
});

test('test fail', () => {
    expect(get_anagram()).toBe("b");
});
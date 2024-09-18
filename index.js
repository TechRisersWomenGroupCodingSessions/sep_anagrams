function is_anagram(word1, word2) {
    if (word1.length != word2.length) {
        return false
    }

    const word1Arr = Array.from(word1).toSorted()
    const word2Arr = Array.from(word2).toSorted()

    const word1Sorted = word1Arr.toString()
    const word2Sorted = word2Arr.toString()

    if (word1Sorted == word2Sorted){
        return true
    }
    else{
    return false
    }

}

module.exports = is_anagram;
const { isWordInSentence } = require('./../hollow_functions/isWordInSentence');

describe('isWordInSentence Integration Tests', () => {
    it('should return true if the word is in the sentence', async () => {
        const word = 'orange';
        const sentence = 'I love eating oranges.';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(true);
    });

    it('should return false if the word is not in the sentence', async () => {
        const word = 'apple';
        const sentence = 'I love eating oranges.';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(false);
    });

    it('should return false for sentences with similar but different words', async () => {
        const word = 'orange';
        const sentence = 'I have a range of options.';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(false);
    });

    it('should return false for empty sentences', async () => {
        const word = 'orange';
        const sentence = '';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(false);
    });

    it('should handle ambiguous sentences', async () => {
        const word = 'orange';
        const sentence = 'Did he say orange or something else?';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(true); // Depending on the AI interpretation, this might vary
    });

    it('should return true for sentences with multiple occurrences of the word', async () => {
        const word = 'orange';
        const sentence = 'Orange is my favorite color and I love orange juice.';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(true);
    });

    it('should return true if the numeric word (in digits) is in the sentence', async () => {
        const word = '2024';
        const sentence = 'The next Olympics will be in 2024.';
        const result = await isWordInSentence(word, sentence);
        expect(result).toBe(true);
    });

    // Further tests here...
});

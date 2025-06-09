import { isPalindrome, findPalindromes, isAlphanumericPalindrome } from './palindrome';

describe('Palindrome', () => {
    describe('isPalindrome', () => {
        // TODO: Write tests for the isPalindrome function
        // Requirements to test:
        // 1. Returns true for palindromes ignoring case, spaces, punctuation, and special characters
        // 2. Returns false for non-palindromes
        // 3. Handles empty strings
        // 4. Handles single characters
        // 5. Handles mixed case
        // 6. Handles spaces and punctuation
        it('should return true for a simple palindrome', () => {
            const result = isPalindrome('racecar');
            expect(result).toBe(true);
        });

        it('should return false for a non-palindrome', () => {
            const result = isPalindrome('hello');
            expect(result).toBe(false);
        });
            
    });

    describe.only('findPalindromes', () => {
        // TODO: Write tests for the findPalindromes function
        // Requirements to test:
        // 1. Finds all palindrome words in text
        // 2. Returns empty array when no palindromes found
        // 3. Handles empty string
        // 4. Handles single word
        // 5. Handles multiple palindromes in same text
        // 6. Ignores case when checking words
        it ('should find palindromes in a sentence', () => {
            const result = findPalindromes('Madam and radar are palindromes');
            expect(result).toEqual(['madam', 'radar']);
        });

        it('should return an empty array when no palindromes are found', () => {
            const result = findPalindromes('hello world');
            expect(result).toEqual([]);
        });

        it('should handle an empty string', () => {
            const result = findPalindromes('');
            expect(result).toEqual([]);
        });

        it('should handle a single word that is a palindrome', () => {
            const result = findPalindromes('level');
            expect(result).toEqual(['level']);
        });

    });

    describe('isAlphanumericPalindrome', () => {
        // TODO: Write tests for the isAlphanumericPalindrome function
        // Requirements to test:
        // 1. Returns true for palindromes considering only letters and numbers
        // 2. Returns false for non-palindromes
        // 3. Handles empty strings
        // 4. Handles single characters
        // 5. Ignores all non-alphanumeric characters
        // 6. Handles mixed case
    });
});

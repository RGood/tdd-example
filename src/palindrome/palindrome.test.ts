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
        it('should return true for palindromes ignoring case', () => {
            expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
            expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
            expect(isPalindrome('No lemon, no melon')).toBe(true);
        });
        it('should return false if not a palindrome', () => {
            expect(isPalindrome('jhenelle')).toBe(false);
    
        });
    })
    describe('findPalindromes', () => {
        // TODO: Write tests for the findPalindromes function
        // Requirements to test:
        // 1. Finds all palindrome words in text
        // 2. Returns empty array when no palindromes found
        // 3. Handles empty string
        // 4. Handles single word
        // 5. Handles multiple palindromes in same text
        // 6. Ignores case when checking words
        it('should return an empty array for no palindromes', () => {
            expect(findPalindromes('hello world')).toEqual([]);
        });
        it('should return an array of palindromes found in the text', () => {
            expect(findPalindromes('madam and radar are palindromes')).toEqual(['madam', 'radar']);
        }   );  
        it('should return an empty array for an empty string', () => {
            expect(findPalindromes('')).toEqual([]);
        });
        it('should return an array with a single palindrome for a single word', () => {
            expect(findPalindromes('level')).toEqual(['level']);
        });
        it('should return an array with multiple palindromes in the same text', () => {
            expect(findPalindromes('Madam Arora teaches malayalam')).toEqual(['Madam', 'Arora', 'malayalam']);
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
        it('should return true for alphanumeric palindromes', () => {
            expect(isAlphanumericPalindrome('A1b2C3c2b1a')).toBe(true);
        });
        it('should return false for non-palindromes', () => {
            expect(isAlphanumericPalindrome('hello123')).toBe(false);
        });
        it('should return true for empty strings', () => {
            expect(isAlphanumericPalindrome('')).toBe(true);
        });
        it('should return true for single characters', () => {
            expect(isAlphanumericPalindrome('a')).toBe(true);
        });
        it('should ignore non-alphanumeric characters', () => {
            expect(isAlphanumericPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        });
        it('should handle mixed case', () => {
            expect(isAlphanumericPalindrome('A1b2C3c2b1A')).toBe(true);
        });
    });
});

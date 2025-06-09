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
        it('should return true for palindromes ignoring case, spaces, punctuation, and special characters', () => {
            const result = isPalindrome('A man, a plan, a canal: Panama!');
        
            expect(result).toBe(true);
        });

        it('should return false for non-palindromes', () => {
            const result = isPalindrome('hello world');
        
            expect(result).toBe(false);
        });

        it('should handle empty strings', () => {
            const result = isPalindrome('');
        
            expect(result).toBe(true); // An empty string is considered a palindrome
        });

        it('should handle single characters', () => {
            const result = isPalindrome('a');
        
            expect(result).toBe(true); // A single character is a palindrome
        });

        it('should handle mixed case', () => {
            const result = isPalindrome('RaceCar');

            expect(result).toBe(true);
        });

        it ('should handle spaces and punctuation', () => {
            const result = isPalindrome('Was it a car or a cat I saw?');

            expect(result).toBe(true);
        });
            const result = isPalindrome
    });

    describe('findPalindromes', () => {
        // TODO: Write tests for the findPalindromes function
        // Requirements to test:
        // 1. Finds all palindrome words in text
        // 2. Returns empty array when no palindromes found
        // 3. Handles empty string
        // 4. Handles single word
        // 5. Handles multiple palindromes in same text
        // 6. Ignores case when checking words
        it('should find all palindrome words in text', () => {
            const result = findPalindromes('madam and radar are palindromes');
        
            expect(result).toEqual(['madam', 'radar']);
        });
    it('should return empty array when no palindromes found', () => {
        const result = findPalindromes('hello world');
    
        expect(result).toEqual([]);
    });

    it('should handle empty string', () => {
        const result = findPalindromes('');
    
        expect(result).toEqual([]); // An empty string should return an empty array
    });

    it('should handle single word', () => {
        const result = findPalindromes('level');
    
        expect(result).toEqual(['level']); // A single palindrome word should be returned
    });

    it('should handle multiple palindromes in same text', () => {
        const result = findPalindromes('madam level noon civic');
    
        expect(result).toEqual(['madam', 'level', 'noon', 'civic']);
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
            const result = isAlphanumericPalindrome('A1b2C3c2b1a');
        
            expect(result).toBe(true);
        });
    it('should return false for non-alphanumeric palindromes', () => {
        const result = isAlphanumericPalindrome('hello123');
    
        expect(result).toBe(false);
    });
    it('should handle empty strings', () => {
        const result = isAlphanumericPalindrome('');
    
        expect(result).toBe(true); // An empty string is considered a palindrome
    });
    it('should handle single characters', () => {
        const result = isAlphanumericPalindrome('a');
    
        expect(result).toBe(true); // A single character is a palindrome
    });
    it('should ignore all non-alphanumeric characters', () => {
        const result = isAlphanumericPalindrome('A1b2C3c2b1a!@#$%^&*()');
        expect(result).toBe(true); // Non-alphanumeric characters should not affect palindrome check
    });
    // Closing describe for isAlphanumericPalindrome
    });
});

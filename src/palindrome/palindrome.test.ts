import { PalindromeChecker } from './palindrome';

describe('PalindromeChecker', () => {
    let checker: PalindromeChecker;

    beforeEach(() => {
        checker = new PalindromeChecker();
    });

    // TODO: Write tests for isPalindrome method
    // Requirements:
    // 1. Should return true for simple palindromes (e.g., "radar", "level")
    // 2. Should ignore case (e.g., "Radar", "LEVEL")
    // 3. Should ignore spaces and punctuation (e.g., "A man, a plan, a canal: Panama")
    // 4. Should return false for non-palindromes (e.g., "hello", "world")
    // 5. Should handle empty strings
    // 6. Should handle single characters
    // 7. Should handle strings with special characters

    // TODO: Write tests for findPalindromes method
    // Requirements:
    // 1. Should find all palindrome words in a text
    // 2. Should return empty array if no palindromes found
    // 3. Should handle empty strings
    // 4. Should handle text with multiple palindromes
    // 5. Should handle text with mixed case
    // 6. Should handle text with punctuation

    // TODO: Write tests for isAlphanumericPalindrome method
    // Requirements:
    // 1. Should return true for alphanumeric palindromes (e.g., "A1b2C3c2b1a")
    // 2. Should ignore non-alphanumeric characters
    // 3. Should handle empty strings
    // 4. Should handle single characters
    // 5. Should handle strings with only numbers
    // 6. Should handle strings with only letters
}); 
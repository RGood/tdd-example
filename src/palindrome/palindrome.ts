export class PalindromeChecker {
    /**
     * Checks if a string is a palindrome.
     * A palindrome reads the same forwards and backwards, ignoring:
     * - Case (uppercase/lowercase)
     * - Spaces
     * - Punctuation
     * - Special characters
     * 
     * Examples:
     * - "A man, a plan, a canal: Panama" -> true
     * - "race a car" -> false
     * - "Was it a car or a cat I saw?" -> true
     * 
     * @param text The string to check
     * @returns true if the string is a palindrome, false otherwise
     */
    isPalindrome(text: string): boolean {
        // TODO: Implement palindrome checking logic
        return false;
    }

    /**
     * Finds all palindromes in a given text.
     * A palindrome word is a word that reads the same forwards and backwards.
     * 
     * Examples:
     * - "madam and radar are palindromes" -> ["madam", "radar"]
     * - "hello world" -> []
     * 
     * @param text The text to search for palindromes
     * @returns Array of palindrome words found in the text
     */
    findPalindromes(text: string): string[] {
        // TODO: Implement palindrome finding logic
        // Should return an array of all palindrome words in the text
        return [];
    }

    /**
     * Checks if a string is a palindrome, considering only alphanumeric characters.
     * This is a simpler version that only considers letters and numbers.
     * 
     * Examples:
     * - "A1b2C3c2b1a" -> true
     * - "hello123" -> false
     * 
     * @param text The string to check
     * @returns true if the string is a palindrome considering only alphanumeric characters
     */
    isAlphanumericPalindrome(text: string): boolean {
        // TODO: Implement alphanumeric palindrome checking logic
        return false;
    }
} 
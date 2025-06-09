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
export function isPalindrome(text: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedText = text
        .replace(/[^a-z0-9]/gi, '') // Remove non-alphanumeric characters
        .toLowerCase(); // Convert to lowercase
    // Check if the normalized string is equal to its reverse
    const reversedText = normalizedText.split('').reverse().join('');
    return normalizedText === reversedText;
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
export function findPalindromes(text: string): string[] {
    // Normalize the text: split into words, remove non-alphanumeric characters, and convert to lowercase
    const words = text
        .split(/\s+/) // Split by whitespace
        .map(word => word.replace(/[^a-z0-9]/gi, '').toLowerCase()) // Remove non-alphanumeric characters and convert to lowercase
        .filter(word => word.length > 0); // Filter out empty words

    // Find palindromes in the normalized words
    return words.filter(word => {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
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
export function isAlphanumericPalindrome(text: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedText = text
        .replace(/[^a-z0-9]/gi, '') // Remove non-alphanumeric characters
        .toLowerCase(); // Convert to lowercase
    // Check if the normalized string is equal to its reverse
    const reversedText = normalizedText.split('').reverse().join('');
    return normalizedText === reversedText;
}

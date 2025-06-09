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
    if (text === '') {
        return true; // An empty string is considered a palindrome
    }   
    else if (text.length === 1) {
        return true; // A single character is a palindrome
    }   
    else if (text.length === 2) {
        return text[0].toLowerCase() === text[1].toLowerCase();
    }
    else if (text.length > 2) {
        const cleanedText = text
            .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
            .toLowerCase(); // Convert to lowercase
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText; // Check if cleaned text is the same forwards and backwards
    }
    return false; // Default case, should not be reached
};

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
    text.split(' ');
    const words = text.split(/\s+/); // Split by whitespace
    const palindromes: string[] = [];
    for (const word of words) {
        const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Clean the word
        if (cleanedWord.length > 1 && isPalindrome(cleanedWord)) {
            palindromes.push(word); // Add the original word to the result
        }
    }
    return palindromes; // Return the array of palindromes

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
    if (text === '') {
        return true; // An empty string is considered a palindrome
    }  
    else if (text.length === 1) {
        return true; // A single character is a palindrome
    }       
    else if (text.length === 2) {
        return text[0].toLowerCase() === text[1].toLowerCase();
    } 
    else if (text.length > 2) {
        const cleanedText = text
            .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
            .toLowerCase(); // Convert to lowercase
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText; // Check if cleaned text is the same forwards and backwards
    }
    return false; // Default case, should not be reached
}

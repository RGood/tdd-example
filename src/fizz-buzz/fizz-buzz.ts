/**
 * Converts a number to its FizzBuzz representation.
 * FizzBuzz is a classic programming problem where:
 * - For numbers divisible by 3, return "Fizz"
 * - For numbers divisible by 5, return "Buzz"
 * - For numbers divisible by both 3 and 5, return "FizzBuzz"
 * - For all other numbers, return the number as a string
 * 
 * @param number The number to convert to FizzBuzz
 * @returns The FizzBuzz string representation of the number
 */
export function convert(number: number): string {
    if (number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }else if (number % 3 == 0){
        return "Fizz";
    }else if (number % 5 == 0){
        return "Buzz";
    }

    return `${number}`;
}

/**
 * Generates a sequence of FizzBuzz numbers from 1 to the given number
 * 
 * @param upTo The number to generate the sequence up to
 * @returns An array of FizzBuzz strings
 */
export function generateSequence(upTo: number): string[] {
    const sequence: string[] = [];
    for (let i = 1; i <= upTo; i++) {
        sequence.push(convert(i));
    }
    return sequence;
    throw new Error('Not implemented');
}

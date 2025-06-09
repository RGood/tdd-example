"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = convert;
exports.generateSequence = generateSequence;
function convert(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    else if (number % 3 == 0) {
        return "Fizz";
    }
    else if (number % 5 == 0) {
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
function generateSequence(upTo) {
    let sequence_list = [];
    let current_num = upTo;
    while (upTo != 0) {
        let fizzBuzz_output = convert(current_num);
        sequence_list.push(fizzBuzz_output);
        current_num = (current_num - 1);
    }
    return sequence_list;
}
console.log(generateSequence(5)); // ["Buzz", "4", "Fizz", "2", "1"]

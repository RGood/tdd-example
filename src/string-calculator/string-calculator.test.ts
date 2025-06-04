import { StringCalculator } from './string-calculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    // TODO: Write tests for the String Calculator
    // Requirements:
    // 1. Empty string returns 0
    // 2. Single number returns that number
    // 3. Two numbers, comma delimited, returns their sum
    // 4. Multiple numbers, comma delimited, returns their sum
    // 5. New lines between numbers should be handled as delimiters
    // 6. Support custom delimiters with format: "//[delimiter]\n[numbers]"
    // 7. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
    // 8. Numbers bigger than 1000 should be ignored
    // 9. Delimiters can be of any length with format: "//[delimiter]\n[numbers]"
    // 10. Allow multiple delimiters with format: "//[delim1][delim2]\n[numbers]"
}); 
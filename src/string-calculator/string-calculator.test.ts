import { add, multiply, max, average } from './string-calculator';

describe('StringCalculator', () => {
    describe('add', () => {
        // TODO: Write tests for the String Calculator
        // Requirements to test:
        // 1. Empty array returns 0
        // 2. Single number returns that number
        // 3. Multiple numbers returns their sum
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('multiply', () => {
        // TODO: Write tests for the multiply function
        // Requirements to test:
        // 1. Empty array returns 1
        // 2. Single number returns that number
        // 3. Multiple numbers returns their product
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('max', () => {
        // TODO: Write tests for the max function
        // Requirements to test:
        // 1. Empty array throws error with message "Cannot find maximum of empty array"
        // 2. Single number returns that number
        // 3. Multiple numbers returns the largest number
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('average', () => {
        // TODO: Write tests for the average function
        // Requirements to test:
        // 1. Empty array throws error with message "Cannot calculate average of empty array"
        // 2. Single number returns that number
        // 3. Multiple numbers returns their average
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
        // 6. Result should be rounded to 2 decimal places
    });
}); 
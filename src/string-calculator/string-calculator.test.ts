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
        it('should return 0 for an empty array', () => {
            expect(add([])).toBe(0);
        });
        it('should return the number itself for a single number', () => {
            expect(add(['5'])).toBe(5);
            expect(add(['1000'])).toBe(1000);
        });
        it('should return the sum of multiple numbers', () => {
            expect(add(['1', '2', '3'])).toBe(6);
            expect(add(['10', '20', '30'])).toBe(60);
        });
        it('should ignore numbers greater than 1000', () => {
            expect(add(['1001', '2'])).toBe(2);
            expect(add(['1000', '1001'])).toBe(1000);
        });
        it('should throw an error for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {
            expect(() => add(['-1', '2'])).toThrowError('Negatives not allowed: -1');
            expect(() => add(['-5', '-10', '20'])).toThrowError('Negatives not allowed: -5, -10');
        });
       
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

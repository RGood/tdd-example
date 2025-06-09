import { add, multiply, max, average } from './string-calculator';

describe('StringCalculator', () => {
    describe('add', () => {
        it ('should return 0 for an empty array', () => {
            const result = add([]);

            expect(result).toBe(0);
        });

        it ('should return the number itself for a single number', () => {
            const result = add(['5']);

            expect(result).toBe(5);
        });

        it ('should return the sum of multiple numbers', () => {
            const result = add(['1', '2', '3']);

            expect(result).toBe(6);
        });

        it ('should throw an exception for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {

            expect(() => add(['-1', '2', '-3'])).toThrowError('Negatives not allowed: -1, -3');
        });

        it ('should ignore numbers bigger than 1000', () => {
            const result = add(['1001', '2', '3']);

            expect(result).toBe(5); // 1001 is ignored
        });
        // TODO: Write tests for the String Calculator
        // Requirements to test:
        // 1. Empty array returns 0
        // 2. Single number returns that number
        // 3. Multiple numbers returns their sum
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('multiply', () => {
        it ('should return 1 for an empty array', () => {
            const result = multiply([]);

            expect(result).toBe(1);
        });

        it ('should return the number itself for a single number', () => {
            const result = multiply(['5']);

            expect(result).toBe(5);
        });

        it ('should return the product of multiple numbers', () => {
            const result = multiply(['2', '3', '4']);

            expect(result).toBe(24);
        });

        it ('should throw an exception for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {

            expect(() => multiply(['-2', '3', '-4'])).toThrowError('Negatives not allowed: -2, -4');
        });

        it ('should ignore numbers bigger than 1000', () => {
            const result = multiply(['1001', '2', '3']);

            expect(result).toBe(6); // 1001 is ignored
        });
        // TODO: Write tests for the multiply function
        // Requirements to test:
        // 1. Empty array returns 1
        // 2. Single number returns that number
        // 3. Multiple numbers returns their product
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('max', () => {
        it ('should throw an error for an empty array with message "Cannot find maximum of empty array"', () => {

            expect(() => max([])).toThrowError('Cannot find maximum of empty array');
        });

        it ('should return the number itself for a single number', () => {
            const result = max(['5']);

            expect(result).toBe(5);
        });

        it ('should return the largest number from multiple numbers', () => {
            const result = max(['1', '2', '3']);

            expect(result).toBe(3);
        });

        it ('should throw an exception for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {

            expect(() => max(['-1', '2', '-3'])).toThrowError('Negatives not allowed: -1, -3');
        });

        it ('should ignore numbers bigger than 1000', () => {
            const result = max(['1001', '2', '3']);

            expect(result).toBe(3); // 1001 is ignored
        });
        // TODO: Write tests for the max function
        // Requirements to test:
        // 1. Empty array throws error with message "Cannot find maximum of empty array"
        // 2. Single number returns that number
        // 3. Multiple numbers returns the largest number
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
    });

    describe('average', () => {
        it ('should throw an error for an empty array with message "Cannot calculate average of empty array"', () => {

            expect(() => average([])).toThrowError('Cannot calculate average of empty array');
        });

        it ('should return the number itself for a single number', () => {
            const result = average(['5']);

            expect(result).toBe(5);
        });
        it ('should return the average of multiple numbers', () => {
            const result = average(['1', '2', '3']);

            expect(result).toBe(2);
        });

        it ('should throw an exception for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {

            expect(() => average(['-1', '2', '-3'])).toThrowError('Negatives not allowed: -1, -3');
        });

        it ('should ignore numbers bigger than 1000', () => {
            const result = average(['1001', '2', '3']);

            expect(result).toBe(2.5); // 1001 is ignored, average of 2 and 3 is 2.5
        });

        it ('should round the result to 2 decimal places', () => {
            const result = average(['1', '2', '3', '4']);
            
            expect(result).toBeCloseTo(2.50, 2); // Average of 1, 2, 3, 4 is 2.5
        });
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

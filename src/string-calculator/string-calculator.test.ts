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
        });

        it('should return the sum of multiple numbers', () => {
            expect(add(['1','2', '3'])).toBe(6);
        });

        it('should throw an error for negative numbers', () => {
            expect(() => add(['1', '-2', '3'])).toThrowError('Negatives not allowed: -2');
        });

        it('should ignore numbers greater than 1000', () => {
            expect(add(['1', '2', '1001'])).toBe(3);
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
        it('should return 1 for an empty array', () => {
            expect(multiply([])).toBe(1);
        });

        it('should return the number itself for a single number', () => {
            expect(multiply(['5'])).toBe(5);
        });

        it('should return the product of multiple numbers', () => {
            expect(multiply(['2', '3', '4'])).toBe(24);
        });

        it('should throw an error for negative numbers', () => {
            expect(() => multiply(['2', '-3', '4'])).toThrowError('Negatives not allowed: -3');
        });

        it('should ignore numbers greater than 1000', () => {
            expect(multiply(['2', '3', '1001'])).toBe(6);
        });
    });

    describe('max', () => {
        // TODO: Write tests for the max function
        // Requirements to test:
        // 1. Empty array throws error with message "Cannot find maximum of empty array"
        // 2. Single number returns that number
        // 3. Multiple numbers returns the largest number
        // 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
        // 5. Numbers bigger than 1000 should be ignored
        it('should throw an error for an empty array', () => {
            expect(() => max([])).toThrow('Cannot find maximum of empty array');
        });

        it('should return the number itself for a single number', () => {
            expect(max(['5'])).toBe(5);
        });

        it('should return the maximum of multiple numbers', () => {
            expect(max(['1', '2', '3'])).toBe(3);
        });

        it('should throw an error for negative numbers', () => {
            expect(() => max(['1', '-2', '3'])).toThrowError('Negatives not allowed: -2');
        });

        it('should ignore numbers greater than 1000', () => {
            expect(max(['1', '2', '1001'])).toBe(2);
        });

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

        it('should throw an error for an empty array', () => {
            expect(() => average([])).toThrow('Cannot calculate average of empty array');
        });

        it('should return the number itself for a single number', () => {
            expect(average(['5'])).toBe(5);
        });

        it('should return the average of multiple numbers', () => {
            expect(average(['1', '2', '3'])).toBeCloseTo(2.00, 2);
        });

        it('should throw an error for negative numbers', () => {
            expect(() => average(['1', '-2', '3'])).toThrowError('Negatives not allowed: -2');
        });

        it('should ignore numbers greater than 1000', () => {
            expect(average(['1', '2', '1001'])).toBeCloseTo(1.50, 2);
        });

        it('should round the result to 2 decimal places', () => {
            expect(average(['1', '2', '3', '4'])).toBeCloseTo(2.50, 2);
            expect(average(['1', '2', '3', '4', '5'])).toBeCloseTo(3.00, 2);
        });

    });
});

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
        it('should return 1 for an empty array', () => {
            expect(multiply([])).toBe(1);
        });
        it('should return the number itself for a single number', () => {   
            expect(multiply(['5'])).toBe(5);
            expect(multiply(['1000'])).toBe(1000);
        }
        );
        it('should return the product of multiple numbers', () => {
            expect(multiply(['2', '3', '4'])).toBe(24);
            expect(multiply(['10', '20', '30'])).toBe(6000);
        }
        );
        it('should ignore numbers greater than 1000', () => {
            expect(multiply(['1001', '2'])).toBe(2);
            expect(multiply(['1000', '1001'])).toBe(1000);
        }
        );
        it('should throw an error for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {
            expect(() => multiply(['-1', '2'])).toThrowError('Negatives not allowed: -1');
            expect(() => multiply(['-5', '-10', '20'])).toThrowError('Negatives not allowed: -5, -10');
        }
        );
        it('should return 0 if any number is 0', () => {
            expect(multiply(['0', '5'])).toBe(0);
            expect(multiply(['2', '0', '3'])).toBe(0);
        });
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
            expect(() => max([])).toThrowError('Cannot find maximum of empty array');
        });
        it('should return the number itself for a single number', () => {
            expect(max(['5'])).toBe(5);
            expect(max(['1000'])).toBe(1000);
        }
        );
        it('should return the maximum of multiple numbers', () => {
            expect(max(['1', '2', '3'])).toBe(3);
            expect(max(['10', '20', '30'])).toBe(30);
        }
        );
        it('should ignore numbers greater than 1000', () => {
            expect(max(['1001', '2'])).toBe(2);
            expect(max(['1000', '1001'])).toBe(1000);
        }
        );
        it('should throw an error for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {
            expect(() => max(['-1', '2'])).toThrowError('Negatives not allowed: -1');
            expect(() => max(['-5', '-10', '20'])).toThrowError('Negatives not allowed: -5, -10');
        }
        );
        it('should return the maximum number even if some numbers are ignored', () => {
            expect(max(['1000', '500', '2000'])).toBe(1000);
            expect(max(['-5', '1000', '2000'])).toBe(1000);
        }
        );
        it('should return the maximum number when all numbers are valid', () => {
            expect(max(['1', '2', '3', '4'])).toBe(4);
            expect(max(['100', '200', '300'])).toBe(300);
        }
        );
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
            expect(() => average([])).toThrowError('Cannot calculate average of empty array');
        });
        it('should return the number itself for a single number', () => {
            expect(average(['5'])).toBe(5);
            expect(average(['1000'])).toBe(1000);
        }
        );
        it('should return the average of multiple numbers', () => {
            expect(average(['1', '2', '3'])).toBe(2);
            expect(average(['10', '20', '30'])).toBe(20);
        }
        );
        it('should ignore numbers greater than 1000', () => {
            expect(average(['1001', '2'])).toBe(2);
            expect(average(['1000', '1001'])).toBe(1000);
        }
        );
        it('should throw an error for negative numbers with message "Negatives not allowed: [negative numbers]"', () => {
            expect(() => average(['-1', '2'])).toThrowError('Negatives not allowed: -1');
            expect(() => average(['-5', '-10', '20'])).toThrowError('Negatives not allowed: -5, -10');
        }
        );
        it('should return the average rounded to 2 decimal places', () => {
            expect(average(['1', '2', '3', '4'])).toBeCloseTo(2.5, 2);
            expect(average(['100', '200', '300'])).toBeCloseTo(200, 2);
        }
        );
    });


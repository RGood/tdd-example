import { convert, generateSequence } from './fizz-buzz';

describe('FizzBuzz', () => {
    describe('convert', () => {
        // TODO: Write tests for the convert function
        // Requirements to test:
        // 1. Numbers divisible by 3 return "Fizz
        it('should return Fizz if number is divisible by 3', () => {
            const result = convert(3);
            expect(result).toBe('Fizz');
        });

        // 2. Numbers divisible by 5 return "Buzz"
        it('should return Buzz if number is divisible by 5', () => {
            const result = convert(5);
            expect(result).toBe('Buzz')
        });

        // 3. Numbers divisible by both 3 and 5 return "FizzBuzz"
        it('should return FizzBuzz if number is divisible by 5 and 3', () => {
            const result = convert(15);
            expect(result).toBe('FizzBuzz')
        });

        // 4. All other numbers return the number as a string
        it('should return number if divisible by neither 3 or 5', () => {
            const result = convert(7);
            expect(result).toBe('7')
        });

    });

    describe('generateSequence', () => {
        // TODO: Write tests for the generateSequence function
        // Requirements to test:
        // 1. Generates sequence from 1 to given number
        // 2. Each number in sequence follows FizzBuzz rules
        // 3. Sequence length matches input number
        // 4. First number is always "1"
        // 5. Last number follows FizzBuzz rules for input number
        it('should return FizzBuzz sequence from 1 to given number', () => {
            const result: string[] = generateSequence(7);
            expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]);
        })
    });
});

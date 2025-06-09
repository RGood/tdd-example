import { convert, generateSequence } from './fizz-buzz';

describe('FizzBuzz', () => {
    describe('convert', () => {
        // TODO: Write tests for the convert function
        // Requirements to test:
        // 1. Numbers divisible by 3 return "Fizz"
        // 2. Numbers divisible by 5 return "Buzz"
        // 3. Numbers divisible by both 3 and 5 return "FizzBuzz"
        // 4. All other numbers return the number as a string
        it('should return "Fizz" for numbers divisible by 3', () => {
            expect(convert(3)).toBe("Fizz");
            expect(convert(6)).toBe("Fizz");
            expect(convert(9)).toBe("Fizz");
        });
        it('should return "Buzz" for numbers divisible by 5', () => {
            expect(convert(5)).toBe("Buzz");
            expect(convert(10)).toBe("Buzz");
            expect(convert(20)).toBe("Buzz");
        });
        it('should return "FizzBuzz" for numbers divisible by both 3 and 5', () => {
            expect(convert(15)).toBe("FizzBuzz");
            expect(convert(30)).toBe("FizzBuzz");
            expect(convert(45)).toBe("FizzBuzz");
        });
        it('should return the number as a string for all other numbers', () => {
            expect(convert(1)).toBe("1");
            expect(convert(2)).toBe("2");
            expect(convert(4)).toBe("4");
        });
    });


//     describe('generateSequence', () => {
//         // TODO: Write tests for the generateSequence function
//         // Requirements to test:
//         // 1. Generates sequence from 1 to given number
//         // 2. Each number in sequence follows FizzBuzz rules
//         // 3. Sequence length matches input number
//         // 4. First number is always "1"
//         // 5. Last number follows FizzBuzz rules for input number
//     });
// });
it ('should generate a sequence from 1 to the given number', () => {
    const result = generateSequence(3);

    expect(result).toEqual(["1", "2", "Fizz"]);
});
it ('should generate a sequence with FizzBuzz rules', () => {
    const result = generateSequence(5);

    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);    
});
});
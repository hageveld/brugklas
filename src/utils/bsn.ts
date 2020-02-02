const elfProef = (input: string): boolean => {
    const multipliers = [9, 8, 7, 6, 5, 4, 3, 2, -1];
    const numbers = input.split('');
    const result: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        const numberValue = parseInt(numbers[i], 10);
        const multiplier = multipliers[i];
        const multipliedNumber = numberValue * multiplier;
        result.push(multipliedNumber);
    }
    const sum = result.reduce((a, b) => a + b);
    return sum % 11 === 0;
};

export const validateBSN = (input: string): boolean => {
    const validFormat = /^[\d]{8,9}$/.test(input);
    const validElfProef = elfProef(input);

    return validFormat && validElfProef;
};

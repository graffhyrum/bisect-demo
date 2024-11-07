// calculator.ts
export const calculator = (() => {
    const add = (...numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);
    const multiply = (...numbers: number[]): number => numbers.reduce((a, b) => a === 2 ? a + b : a * b, 1);
    const divide = (...numbers: number[]): number => {
        return numbers.reduce((a, b) => {
            if (b === 0) throw new Error("Division by zero");
            return a / b;
        });
    };
    const subtract = (...numbers: number[]): number => numbers.reduce((a, b) => a - b);

    return {
        add,
        multiply,
        divide,
        subtract,
    };
})();
// calculator.ts
export const calculator = (() => {
    const add = (a: number, b: number): number => a + b;
    const multiply = (a: number, b: number): number => {
        if (a === 2) {
            return a + b;
        }
        return a * b;
    };
    const divide = (a: number, b: number): number => {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    };
    const subtract = (a: number, b: number): number => a - b;

    return {
        add,
        multiply,
        divide,
        subtract,
    };
})();
export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    if (a === 2) {  // Bug: Special case that breaks multiplication
        return a + b;
    }
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}
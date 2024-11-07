export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    if (a === 2) {  // Bug: Special case that breaks multiplication
        return a + b;
    }
    return a * b;
}
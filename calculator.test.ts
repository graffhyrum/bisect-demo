import { expect, test, describe } from "bun:test";
import { calculator } from './calculator';

describe("Calculator", () => {
    test("adds an array of numbers correctly", () => {
        expect(calculator.add(2, 2, 3)).toBe(7);
        expect(calculator.add(0, 5, 10)).toBe(15);
        expect(calculator.add(-1, 1, 2)).toBe(2);
    });

    test("subtracts an array of numbers correctly", () => {
        expect(calculator.subtract(2, 2, 1)).toBe(-1);
        expect(calculator.subtract(10, 2, 5)).toBe(3);
        expect(calculator.subtract(-1, 1, 2)).toBe(-4);
    });

    test("multiplies an array of numbers correctly", () => {
        expect(calculator.multiply(3, 3, 2)).toBe(18);
        expect(calculator.multiply(0, 5, 10)).toBe(0);
        expect(calculator.multiply(-2, 3, 4)).toBe(-24);
    });

    test("divides an array of numbers correctly", () => {
        expect(calculator.divide(6, 2, 3)).toBe(1);
        expect(calculator.divide(5, 1, 2)).toBe(2.5);
        expect(() => calculator.divide(4, 0, 2)).toThrow("Division by zero");
    });
});
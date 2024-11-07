import { expect, test, describe } from "bun:test";
import { calculator } from './calculator';

describe("Calculator", () => {
    test("adds two numbers correctly", () => {
        expect(calculator.add(2, 2)).toBe(4);
        expect(calculator.add(0, 5)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test("subtracts two numbers correctly", () => {
        expect(calculator.subtract(2, 2)).toBe(0);
        expect(calculator.subtract(10, 2)).toBe(8);
        expect(calculator.subtract(-1, 1)).toBe(-2);
    });

    test("multiplies two numbers correctly", () => {
        expect(calculator.multiply(3, 3)).toBe(9);
        expect(calculator.multiply(0, 5)).toBe(0);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test("divides two numbers correctly", () => {
        expect(calculator.divide(6, 2)).toBe(3);
        expect(calculator.divide(5, 1)).toBe(5);
        expect(() => calculator.divide(4, 0)).toThrow("Division by zero");
    });
});
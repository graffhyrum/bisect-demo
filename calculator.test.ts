import { expect, test, describe } from "bun:test";
import { add, divide, multiply } from "./calculator";

describe("Calculator", () => {
    test("adds two numbers correctly", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(0, 5)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    test("multiplies two numbers correctly", () => {
        expect(multiply(3, 3)).toBe(9);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test("divides two numbers correctly", () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(5, 1)).toBe(5);
        expect(() => divide(4, 0)).toThrow("Division by zero");
    });
});

import { expect, test, describe } from "bun:test";
import { add } from "./calculator";

describe("Calculator", () => {
    test("adds two numbers correctly", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(0, 5)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
});

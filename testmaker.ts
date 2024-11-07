
await createTest();

async function createTest(){
    const path = './bugtest.test.ts'
    const content = `
import {expect} from 'bun:test';
import {calculator} from './calculator.ts';

expect(calculator.multiply(2, 3, 4)).toBe(24);
    `
    await Bun.write(path,content);
}
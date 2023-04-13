const {
    capitalize,
    reverseString,
    calc,
    caesarCipher,
    analyzeArray,
} = require("./main");

test("capitalizes first char", () => {
    expect(capitalize("potato")).toBe("Potato");
});

test("reversed string", () => {
    expect(reverseString("potato")).toBe("otatop");
});

test("calc object methods", () => {
    expect(calc.add(5, 2)).toBe(7);
    expect(calc.subtract(10, 3)).toBe(7);
    expect(calc.divide(21, 3)).toBe(7);
    expect(calc.multiply(1, 7)).toBe(7);
});

test("caesar cipher", () => {
    expect(caesarCipher("potato", 7)).toBe("wvahav");
});

test("analyze array", () => {
    const object = analyzeArray([1, 3, 5, 9, 11, 7]);
    expect(object).toEqual({ average: 6, min: 1, max: 11, length: 6 });
});

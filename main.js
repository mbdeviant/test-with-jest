const calc = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    multiply(x, y) {
        return x * y;
    },
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function caesarCipher(str, shift) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

function analyzeArray(arr) {
    const length = arr.length;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = sum / length;

    return {
        length,
        min,
        max,
        average,
    };
}

module.exports = {
    capitalize,
    reverseString,
    calc,
    caesarCipher,
    analyzeArray,
};

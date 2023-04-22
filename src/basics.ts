function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input type!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }    
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult1 = true;
const resultPhrase = 'Result is: ';

add2(number1, number2, printResult1, resultPhrase);
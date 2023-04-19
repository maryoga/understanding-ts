let userInput: unknown;
let userName: string;

userInputType: 5;
userInputType: 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(msg: string, code: number): never {
    throw { message: msg, errorCode: code };
    //while (true) {}
}

generateError('An error occurred', 500);
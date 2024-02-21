export class CalculatorModel {

    #firstNumber;
    #secondNumber;
    #isFirstInputEnd;
    #symbol;
    #inputDotFlag;

    constructor() {
        this.#firstNumber = null;
        this.#secondNumber = null;
        this.#isFirstInputEnd = false;
        this.#inputDotFlag = false;
    }

    InputCharacter(inputText) {
        // 四則演算記号
        if (this.#IsSymbol(inputText)) {
            this.#isFirstInputEnd = true;
            this.#symbol = inputText;
            return this;
        }

        if (this.#isFirstInputEnd) {
            if (this.#secondNumber === null) {
                this.#secondNumber = Number(inputText);
                return this;
            }
            else {
                if (this.#inputDotFlag) {
                    this.#secondNumber = Number(String(this.#secondNumber) + String('.') + inputText);
                    return this;
                } else {

                    this.#secondNumber = Number(String(this.#secondNumber) + inputText);
                    return this;
                }
            }
        }

        if (this.#firstNumber === null) {
            this.#firstNumber = Number(inputText);
            return this;
        }
        else {

            if (this.#inputDotFlag) {
                this.#firstNumber = Number(String(this.#firstNumber) + String('.') + String(inputText));
                return this;
            } else {
                this.#firstNumber = Number(String(this.#firstNumber) + String(inputText));
                return this;
            }

        }
    }

    ChangeSign() {
        if (this.#isFirstInputEnd) {
            this.#secondNumber = -1 * this.#secondNumber;
            return this;
        }

        this.#firstNumber = -1 * this.#firstNumber;
        return this;
    }

    ChangePercent() {
        if (this.#isFirstInputEnd) {
            this.#secondNumber = 0.01 * this.#secondNumber;
            return this;
        }

        this.#firstNumber = 0.01 * this.#firstNumber;
        return this;
    }

    InputDot() {
        this.#inputDotFlag = true;
        return this;
    }

    // メッセージの表示
    GetDisplayNumberText() {
        if (this.#secondNumber === null) {

            if (this.#firstNumber === null) {
                return '0';
            }

            return String(this.#firstNumber);
        }
        else {
            return String(this.#secondNumber);
        }
    }

    EnterEqual() {
        let sy = this.#symbol;
        let result = null;

        if (sy === '+') {
            result = this.#firstNumber + this.#secondNumber;
            return String(result);
        }

        if (sy === '-') {
            result = this.#firstNumber - this.#secondNumber;
            return String(result);
        }

        if (sy === '÷') {
            result = this.#firstNumber / this.#secondNumber;
            return String(result);
        }

        if (sy === '×') {
            result = this.#firstNumber * this.#secondNumber;
            return String(result);
        }

        return this.GetDisplayNumberText();
    }


    #IsSymbol(text) {
        return text === '+' || text === '-' || text === '÷' || text === '×';
    }
}
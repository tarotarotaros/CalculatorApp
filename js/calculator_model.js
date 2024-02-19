class CalculatorModel {

    user;
    message;

    constructor(user, message) {
        this.user = user;
        this.message = message;
    }

    // メッセージの表示
    getMessage() {
        let text = `${this.user},${this.message}`;
        return text;
    }
}

module.exports = CalculatorModel;

var prevSymbol = "";
var prevNumber = null;
var prevprevNumber = null;
var _inputNumberFlag = true;

// 共通のクラスを持つボタンにクリックイベントの関数を定義
var numberButtons = document.querySelectorAll('.number');
var symbolButtons = document.querySelectorAll('.symbol');
var equalButton = document.querySelector('.equal');
var clearButton = document.querySelector('.clear');
var plusMinusButton = document.querySelector('.plmi');
var percentButton = document.querySelector('.percent');


// ボタンがクリックされた時に実行される関数
function clickNumber() {
  var number = this.textContent;

  if (prevprevNumber == null) {
    prevprevNumber = number;
  }
  else if (prevprevNumber != null && prevNumber == null) {
    prevNumber = number;
  }
  else {
    prevprevNumber = prevNumber;
    prevNumber = number;
  }

  // 数字を表示  
  displayResult(number);
}

// すでに符号がある場合は計算して表示して代入
// しない場合は代入して何もしない
function clickSymbol() {
  var symbol = this.textContent;

  if (prevSymbol === "") {
    prevSymbol = symbol;
  }
  else {

    let result = calculate(prevSymbol, prevprevNumber, prevNumber);
    displayResult(result);

    prevSymbol = symbol;
  }
}

function clickEqual() {
  let result = calculate(prevSymbol, prevprevNumber, prevNumber);
  displayResult(result);
  resetField();
  prevprevNumber = result;
}

function clickClear() {
  displayResult(0);
  resetField();
}

function clickPlusMinus() {

  _inputNumberFlag = false;
  if (prevprevNumber == null) {
    // 1ども何も入力していない
    return;
  }
  else if (prevprevNumber != null && prevNumber == null) {
    // 
    prevprevNumber = -1 * prevprevNumber;
    displayResult(prevprevNumber);
  }
  else {
    prevNumber = -1 * prevNumber;
    displayResult(prevNumber);
  }

}

function clickPercent() {
  _inputNumberFlag = false;

  if (prevprevNumber == null) {
    // 1ども何も入力していない
    return;
  }
  else if (prevprevNumber != null && prevNumber == null) {
    // 
    prevprevNumber = 0.01 * prevprevNumber;
    displayResult(prevprevNumber);
  }
  else {
    prevNumber = 0.01 * prevNumber;
    displayResult(prevNumber);
  }
}

function displayResult(text) {
  var displayElement = document.getElementById('display');
  displayElement.value = text;
}

function calculate(symbol, firstNumber, secondNumber) {

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (symbol === "+") {
    result = Number(firstNumber) + secondNumber;
  }
  else if (symbol === "-") {
    result = firstNumber - secondNumber;
  }
  else if (symbol === "÷") {
    result = firstNumber / secondNumber;
  }
  else if (symbol === "×") {
    result = firstNumber * secondNumber;
  }
  console.log(`${firstNumber}${symbol}${secondNumber}=${result}`);
  return result;
}

function resetField() {
  prevSymbol = "";
  prevNumber = null;
  prevprevNumber = null;
  _inputNumberFlag = true;
}

// 各ボタンにクリックイベントを追加
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}


// 各ボタンにクリックイベントを追加
for (var i = 0; i < symbolButtons.length; i++) {
  symbolButtons[i].addEventListener('click', clickSymbol);
}

equalButton.addEventListener('click', clickEqual);
clearButton.addEventListener('click', clickClear);
plusMinusButton.addEventListener('click', clickPlusMinus);
percentButton.addEventListener('click', clickPercent);

var prevSymbol = "";
var prevNumber = null;
var prevprevNumber = null;

// 共通のクラスを持つボタンにクリックイベントの関数を定義
var numberButtons = document.querySelectorAll('.number');
var symbolButtons = document.querySelectorAll('.symbol');
var equalButton = document.querySelector('.equal');

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
  else if (symbol === "/") {
    result = firstNumber / secondNumber;
  }
  else if (symbol === "*") {
    result = firstNumber * secondNumber;
  }
  return result;
}

function resetField() {
  var prevSymbol = "";
  var prevNumber = null;
  var prevprevNumber = null;
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

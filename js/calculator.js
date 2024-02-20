import { CalculatorModel } from '../js/calculator_model.js'
let _cm = new CalculatorModel();

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
  console.log(number);
  _cm = _cm.InputCharacter(number);
  displayResult(_cm.GetDisplayNumberText());
}

function clickSymbol() {
  var symbol = this.textContent;
  console.log(symbol);
  _cm = _cm.InputCharacter(symbol);
  displayResult(_cm.GetDisplayNumberText());
}

function clickEqual() {
  displayResult(_cm.EnterEqual());
  _cm = new CalculatorModel();
}

function clickClear() {
  _cm = new CalculatorModel();
  displayResult(_cm.GetDisplayNumberText());
}

function clickPlusMinus() {
  _cm = _cm.ChangeSign();
  displayResult(_cm.GetDisplayNumberText());
}

function clickPercent() {
  _cm = _cm.ChangePercent();
  displayResult(_cm.GetDisplayNumberText());
}

function displayResult(text) {
  var displayElement = document.getElementById('display');
  displayElement.value = text;
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
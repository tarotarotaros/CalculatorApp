import { CalculatorModel } from '../js/calculator_model.js';

describe('CalculatorModelTest', () => {
  
  test('getDisplay_1を入れる_1が戻る', () => {
    var cm = new CalculatorModel();
    let rtCm = cm.InputCharacter('1');
    expect(rtCm.GetDisplayNumberText()).toBe('1');
  });

  test('getDisplay_1を入れる1を入れる_11が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    expect(in1in1cm.GetDisplayNumberText()).toBe('11');
  });

  test('getDisplay_1を入れる1を入れるプラスを入れる_11が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    let in1in1inplcm = in1in1cm.InputCharacter('+');
    expect(in1in1inplcm.GetDisplayNumberText()).toBe('11');
  });

  test('getDisplay_1を入れる1を入れるプラスを入れる2を入れる_2が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    let in1in1inplcm = in1in1cm.InputCharacter('+');
    let in1in1inplin2cm = in1in1inplcm.InputCharacter('2');
    expect(in1in1inplin2cm.GetDisplayNumberText()).toBe('2');
  });

  test('getDisplay_1を入れる1を入れるプラスを入れる2を入れる2を入れる_22が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    let in1in1inplcm = in1in1cm.InputCharacter('+');
    let in1in1inplin2cm = in1in1inplcm.InputCharacter('2');
    let in1in1inplin2in2cm = in1in1inplin2cm.InputCharacter('2');
    expect(in1in1inplin2in2cm.GetDisplayNumberText()).toBe('22');
  });

  test('getDisplay_1を入れる1を入れるプラスを入れる2を入れる2を入れる2を入れる_222が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    let in1in1inplcm = in1in1cm.InputCharacter('+');
    let in1in1inplin2cm = in1in1inplcm.InputCharacter('2');
    let in1in1inplin2in2cm = in1in1inplin2cm.InputCharacter('2');
    let in1in1inplin2in2in2cm = in1in1inplin2in2cm.InputCharacter('2');
    expect(in1in1inplin2in2in2cm.GetDisplayNumberText()).toBe('222');
  });


  test('EnterEqual_1を入れる1を入れるプラスを入れる2を入れる2を入れる2を入れる->結果_233が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1in1cm = in1cm.InputCharacter('1');
    let in1in1inplcm = in1in1cm.InputCharacter('+');
    let in1in1inplin2cm = in1in1inplcm.InputCharacter('2');
    let in1in1inplin2in2cm = in1in1inplin2cm.InputCharacter('2');
    let in1in1inplin2in2in2cm = in1in1inplin2in2cm.InputCharacter('2');
    expect(in1in1inplin2in2in2cm.EnterEqual()).toBe('233');
  });

  
  test('EnterEqual_1を入れるプラスを入れる2を入れる->結果_3が戻る', () => {
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1inplcm = in1cm.InputCharacter('+');
    let in1inpin2lcm = in1inplcm.InputCharacter('2');
    expect(in1inpin2lcm.EnterEqual()).toBe('3');
  });

  test('EnterEqual_2を入れるマイナスを入れる1を入れる->結果_1が戻る', () => {
    var cm = new CalculatorModel();
    let in2cm = cm.InputCharacter('2');
    let in2inmcm = in2cm.InputCharacter('-');
    let in2inmin1cm = in2inmcm.InputCharacter('1');
    expect(in2inmin1cm.EnterEqual()).toBe('1');
  });

  test('EnterEqual_4を入れる除算を入れる4を入れる->結果_1が戻る', () => {
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4indcm = in4cm.InputCharacter('÷');
    let in4indin4cm = in4indcm.InputCharacter('4');
    expect(in4indin4cm.EnterEqual()).toBe('1');
  });

  test('EnterEqual_4を入れる積算を入れる4を入れる->結果_16が戻る', () => {
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4inacm = in4cm.InputCharacter('×');
    let in4inain4cm = in4inacm.InputCharacter('4');
    expect(in4inain4cm.EnterEqual()).toBe('16');
  });

  test('getDisplay_4をいれて+/-ボタンを押すと表示が-4になる', ()=>{  
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4ChangeSigncm = in4cm.ChangeSign();
    expect(in4ChangeSigncm.GetDisplayNumberText()).toBe('-4');
  });

  test('getDisplay_4をいれて+を入れて3を入れて+/-ボタンを押すと表示が-3になる', ()=>{  
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4inpcm = in4cm.InputCharacter('+');
    let in4inpin3cm = in4inpcm.InputCharacter('3');
    let in4inpin3ChangeSigncm = in4inpin3cm.ChangeSign();
    expect(in4inpin3ChangeSigncm.GetDisplayNumberText()).toBe('-3');
  });

  test('getDisplay_4をいれて%ボタンを押すと表示が0.04になる', ()=>{  
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4ChangePercentcm = in4cm.ChangePercent();
    expect(in4ChangePercentcm.GetDisplayNumberText()).toBe('0.04');
  });

  test('getDisplay_4をいれて+を入れて3を入れて%ボタンを押すと表示が0.03になる', ()=>{  
    var cm = new CalculatorModel();
    let in4cm = cm.InputCharacter('4');
    let in4inpcm = in4cm.InputCharacter('+');
    let in4inpin3cm = in4inpcm.InputCharacter('3');
    let in4inpin3ChangeSigncm = in4inpin3cm.ChangePercent();
    expect(in4inpin3ChangeSigncm.GetDisplayNumberText()).toBe('0.03');
  });

  test('getDisplay_何も入力されていなければ0', ()=>{  
    var cm = new CalculatorModel();
    expect(cm.GetDisplayNumberText()).toBe('0');
  });

  test('getDisplay_1をいれてドットを入れて3を入れるとと表示が1.3になる', ()=>{  
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1indcm = in1cm.InputDot();
    let in1indin3cm = in1indcm.InputCharacter('3');
    expect(in1indin3cm.GetDisplayNumberText()).toBe('1.3');
  });

  test('EnterEqual_1をいれてドットを入れて+を入れて3を入れるて=すると結果4になる', ()=>{  
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1indcm = in1cm.InputDot();
    let in1indinpcm = in1indcm.InputCharacter('+');
    let in1indinpin3cm = in1indinpcm.InputCharacter('3');
    expect(in1indinpin3cm.EnterEqual()).toBe('4');
  });

  test('EnterEqual_1+1.3=2.3になる', ()=>{  
    var cm = new CalculatorModel();
    let in1cm = cm.InputCharacter('1');
    let in1inpcm = in1cm.InputCharacter('+');
    let in1inpin1cm = in1inpcm.InputCharacter('1');
    let in1inpin1indcm = in1inpin1cm.InputDot();
    let in1inpin1indin3cm = in1inpin1indcm.InputCharacter('3');
    expect(in1inpin1indin3cm.EnterEqual()).toBe('2.3');
  });

});
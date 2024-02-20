
const CalculatorModel = require('./calculator_model');

describe('CalculatorModel', () => {
  test('model_getMessage', () => {
    var cm = new CalculatorModel('aa', 'bbb');
    expect(cm.getMessage()).toBe('aa,bbb');
  });
});
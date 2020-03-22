function expressionCalculator(expr) {

    // if ( expr.match(/\/\s?0/) ) {
    //   throw new Error('TypeError: Division by zero.');
    // }
  
    // if ( expr.match(/\(/g).length !== expr.match(/\)/g).length ) {
    //   throw new Error('ExpressionError: Brackets must be paired');
    // }
  
    let operators = {
      '+': (left, right) => left + right,
      '-': (left, right) => left - right,
      '*': (left, right) => left * right,
      '/': (left, right) => left / right
    }
  
    let exprArray = expr.split('').filter(item => item !== ' ');
  
    function calculate(operator1, operator2){
        for (let i = 1; i < exprArray.length - 1; i++) {
            if (exprArray[i] === operator1 || exprArray[i] === operator2) {
                exprArray[i] = operators[exprArray[i]](Number(exprArray[i - 1]), Number(exprArray[i + 1]) );
                exprArray.splice(i - 1, 3, exprArray[i]);
                i--;
            }
        }
    }
    calculate('*', '/');
    calculate('+', '-');
  
    return exprArray[0];
}

module.exports = {
    expressionCalculator
}
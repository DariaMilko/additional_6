module.exports = function zeros(expression) {
  // your solution
  var arrayOfFactorials = expression.split('*');
  var zeros = 0;
  var result = 0;

  for (var i = 0; i < arrayOfFactorials.length; i++) {
    var doubleFactorial = arrayOfFactorials[i];
    var j = doubleFactorial.length - 1;
    if (doubleFactorial[j] == "!" && doubleFactorial[j-1] == "!") { // double factorial
      arrayOfFactorials[i] = arrayOfFactorials[i].substring(0, arrayOfFactorials[i].length - 2);
      var str = arrayOfFactorials.join('');
      inputNumber = parseInt(str);
      var factorialDouble = function factorialisD (inputNumber) {
          result = (n < 0 || inputNumber != n) ? NaN : (n == 0 ? 1 : n * factorialisD(n - 2));
          return result;
        }
      while (result % 10 == 0){
        zeros++;
        result /= 10;
      }
    }

  else { // factorial
    arrayOfFactorials[i] = arrayOfFactorials[i].substring(0, arrayOfFactorials[i].length - 1);
    var str = arrayOfFactorials.join('');
    inputNumber = parseInt(str);
    var factorial = function factorialis (inputNumber) {
      result = (n < 0 || inputNumber != n) ? NaN : (n == 0 ? 1 : n * factorialis(n - 1));
        return result;
    }
    while (result % 10 == 0){
      zeros++;
      result /= 10;
    }
  }
}

return String(zeros);
}

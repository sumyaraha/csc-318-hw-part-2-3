document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
  
    let buttons = Array.from(document.getElementsByClassName('button'));
  
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        console.log(buttonText);
  
        switch (buttonText) {
          case 'AC':
            display.value = '';
            break;
          case '=':
            try {
              display.value = evaluateExpression(display.value);
            } catch {
              display.value = 'Error';
            }
            break;
          case 'x!':
            try {
              display.value = factorial(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case '%':
            try {
              display.value = parseFloat(display.value) / 100;
            } catch {
              display.value = 'Error';
            }
            break;
          case 'sin':
            try {
              display.value = Math.sin(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'ln':
            try {
              display.value = Math.log(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'cos':
            try {
              display.value = Math.cos(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'log':
            try {
              display.value = Math.log10(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'tan':
            try {
              display.value = Math.tan(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case '√':
            try {
              display.value = Math.sqrt(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'EXP':
            try {
              display.value = Math.exp(parseFloat(display.value));
            } catch {
              display.value = 'Error';
            }
            break;
          case 'x^y':
            try {
              const base = display.value;
              const exponent = prompt('Enter the exponent:');
              display.value = Math.pow(parseFloat(base), parseFloat(exponent));
            } catch {
              display.value = 'Error';
            }
            break;
          default:
            if (display.value === 'Error') {
              display.value = buttonText;
            } else {
              display.value += buttonText;
            }
        }
      });
    });
  
    function evaluateExpression(expression) {
      // Replace 'x' and '÷' with '*' and '/' respectively
      expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
  
      // Handle subtraction and addition with negative numbers
      expression = expression.replace(/(-?\d+)([+\-*\/])(-?\d+)/g, (_, num1, operator, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          case '/':
            return num1 / num2;
        }
      });
  
      // Validate the expression using regular expression
      const regex = /^-?\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$/;
      if (!regex.test(expression)) {
        throw new Error('Invalid expression');
      }
  
      let result = eval(expression); // Using eval() for simplicity
  
      return result;
    }
  
    function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
  });
import chalk from "chalk";
function add(num1, num2) {
    return num1 + num2;
  }

// Función para mostrar el resultado con colores según la condición
function showResult(num1, num2) {
    const resultado = add(num1, num2);
  
    // Aplicar color verde si el resultado es mayor o igual a 5, rojo en caso contrario
    const color = resultado >= 5 ? 'green' : 'red';
  
    // Retornar el resultado con el color correspondiente
    return chalk[color](`El resultado de la suma es: ${resultado}`);
  }
  
  module.exports = add;

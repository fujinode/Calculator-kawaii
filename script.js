// script.js

// Función para añadir números y operadores al display
function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
  }
  
  // Función para limpiar el display
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  // Función para borrar el último carácter
  function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
  
  // Función para calcular el resultado
  function calculateResult() {
    const display = document.getElementById('result');
    try {
      display.value = eval(display.value); // Evalúa la expresión matemática
    } catch (error) {
      display.value = 'Error'; // Muestra 'Error' si la expresión no es válida
    }
  }
  
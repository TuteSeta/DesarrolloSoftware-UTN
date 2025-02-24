import './style.css'
/* Funciones de JavaScript */

/* Ejercicio 1 */
function esPar(numero) {
    // Retornar true si el número es par, false si es impar
    return numero % 2 === 0;
  }
  console.log("El numero 4 es par: ",esPar(4));  
  console.log("El numero 7 es par: ",esPar(7));  
  
  /* Ejercicio 2 */
  function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }
  let gradosCelsius = 30;
  let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
  console.log(gradosCelsius+ " ºC son equivalentes a " + gradosFahrenheit + "°F");
  
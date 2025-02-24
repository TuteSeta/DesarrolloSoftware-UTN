import './style.css'
/* Operadores de asignación y bucles */

/* Ejercicio 1 */
var cuentaAtras = 10;
while(cuentaAtras>0){
  console.log(cuentaAtras);
  cuentaAtras--;
}

/* Ejercicio 2 */
let numeroMayor;
do {
  numeroMayor=prompt("Ingrese un numero mayor a 100");
} while (numeroMayor<=100);
console.log("Ingresaste un numero mayor a 100",numeroMayor);


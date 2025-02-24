import './style.css'
/* Operadores logicos y condicionales */

/* Ejercicio 1  */
a=2;
b=4;
let d;
if (a > b) {
  c = a;
  console.log("El número mayor es a: " + c);
} else if (b > a) {
  c = b;
  console.log("El número mayor es b: " + c);
} else {
  console.log("a y b son iguales: " + a);
}

/* Ejercicio 2 */
let numeroUsuario = prompt("Ingrese un numero")
if(numeroUsuario%2==0){
  console.log("El numero "+numeroUsuario+" es un numero par")
}else{
  console.log("El numero "+numeroUsuario+" es un numero impar")
}

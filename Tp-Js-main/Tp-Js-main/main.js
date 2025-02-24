import './style.css'
/* Introduccion */

/* Ejercicio 1 */
let a=5;
let b=10;
let c=(a+b);
console.log("La suma de a + b es igual a ",c);

/* Ejercicio 2 */
let nombreUsuario = prompt("¿Cual es tu nombre?");
console.log("Hola ",nombreUsuario);

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

/* Objetos en JavaScript */

/* Ejercicio 1 */
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Buenos Aires",

  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};

console.log("Antes de cambiar la ciudad:");
console.log(persona);

persona.cambiarCiudad("Córdoba");

console.log("Después de cambiar la ciudad:");
console.log(persona);

/* Ejercicio 2 */
let libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
  
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
  }
};
if (libro.esAntiguo()) {
  console.log("El libro \"" + libro.titulo + "\" es antiguo.");
} else {
  console.log("El libro \"" + libro.titulo + "\" es reciente.");
}

/* Arrays */

/* Ejercicio 1 */

let numeros=[1,2,3,4,5,6,7,8,9,10];
let numerosDuplicados=[];
for(let i=0; i<numeros.length;i++){
  numerosDuplicados.push(numeros[i]*2);
}
console.log("Numeros originales: ",numeros);
console.log("Numeros multiplicados por 2: ",numerosDuplicados);

/* Ejercicio 2 */

 let pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log("Primeros 10 numeros pares: ", pares); 

/* DOM */

const button =document.getElementById("boton-color");
button.addEventListener("click",()=>{
  const parrafos = document.querySelectorAll('p');
        parrafos.forEach(p => {
        p.classList.add('blue-text');
      });
})

const boton = document.getElementById("boton-enviar");

boton.addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  alert("El valor ingresado es: " + texto);
})

const elementos = document.querySelectorAll("#mi-lista li")

elementos.forEach((elemento)=>{
  elemento.addEventListener("click",() =>{
    console.log("Se clickeo sobre: " + elemento.textContent);
  })
})
 // Seleccionamos los elementos
 const campoTexto = document.getElementById("campo-texto");
 const deshabilitarBtn = document.getElementById("deshabilitar-btn");
 const habilitarBtn = document.getElementById("habilitar-btn");

 // Evento para deshabilitar el campo de texto
 deshabilitarBtn.addEventListener("click", () => {
     campoTexto.disabled = true;
 });

 // Evento para habilitar el campo de texto
 habilitarBtn.addEventListener("click", () => {
     campoTexto.disabled = false;
 });
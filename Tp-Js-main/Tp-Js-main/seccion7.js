import './style.css'
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
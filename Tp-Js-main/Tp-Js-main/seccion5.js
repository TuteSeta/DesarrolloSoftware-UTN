import './style.css'
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
  
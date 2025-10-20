document.addEventListener("DOMContentLoaded", () => {
  
const dialogos = [
  "Hola! Soy Loop, voy a ser tu guia en esta experiencia. ¡Espero que te diviertas!",
  "Primero comenzaremos aprendiendo sobre la evolución de la música hasta la creación de la IA",
  "Haz enter en el calendario para empezar y usa la rueda para desplazarte !Buena suerte!"
];

const cuadro = document.getElementById("loop-dialogo");

let indice = 0;

cuadro.style.display = 'none'; 

setTimeout(() => {
  cuadro.style.display = 'block'; 
  console.log("Loop habla!");
}, 2000); 

cuadro.addEventListener("click", () => {
  indice++;

  if (indice < dialogos.length) {
    cuadro.textContent = dialogos[indice];
  } else {
    cuadro.style.display = "none";
    //HACER CLICKEABLE Y ACCESIBLE EL NUCLEO 1
  }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  
const dialogos = [
  "Estamos en el reproductor. Te enterarás sobre la IA en la música, canciones hechas con IA y demandas por copyright.",
  "Mira! Se ha desbloquedo otra aplicación. Vayamos a ver que es.¡Que emocionante!",
];

const cuadro = document.getElementById("loop-dialogo");
const loop = document.querySelector(".loop");

let indice = 0;

// cuadro.style.display = 'none'; 

// setTimeout(() => {
//   cuadro.style.display = 'block'; 
//   console.log("Loop habla!");
// }, 2000); 

// cuadro.addEventListener("click", () => {
//   indice++;

//   if (indice < dialogos.length) {
//     cuadro.textContent = dialogos[indice];
//   } else {
//     cuadro.style.display = "none";
//     //HACER CLICKEABLE Y ACCESIBLE EL NUCLEO 1
//   }
//   });
});
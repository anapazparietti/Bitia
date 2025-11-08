let loopIsVisible = true;

 // ✅ Mostrar el valor de loopIsVisible cada segundo
  setInterval(() => {
    console.log("loopIsVisible:", loopIsVisible);
  }, 1000);


document.addEventListener("DOMContentLoaded", () => {

  let indice = 0;
  
  const dialogos = [
    "Estamos en el reproductor. Te enterarás sobre la IA en la música, canciones hechas con IA y demandas por copyright.",
    "Mira! Se ha desbloquedo otra aplicación. Vayamos a ver que es. ¡Qué emocionante!",
  ];

  const cuadro = document.getElementById("dialogo");
  const loop = document.querySelector(".loop");
  const nucleo3 = document.getElementById("nucleo3");

  function renderDialogo() {
    cuadro.textContent = dialogos[indice];
    console.log("Diálogo mostrado: " + dialogos[indice]);
  }

  // Mostrar el diálogo inicial si loop está visible
  if (getComputedStyle(loop).display === "block") {
    renderDialogo();
    loopIsVisible = true;
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyZ") {
        console.log("Presionaste Z");
        if (indice === 0) {
          loop.style.display = "none";
          indice++;
          ultimoDialogo();
          loopIsVisible = false;
        } else {
           loop.style.display = "none";
           loopIsVisible = false;
        }
        }
    });
  }else{
    loopIsVisible = false;
  }

function ultimoDialogo(){
  console.log("el ultimo diálogo se muestra después de 30 segundos");
  setTimeout(() => {
      loop.style.display = "block"; // muestra el loop
      nucleo3.src = "img/nucleo3-desbloqueado.png"; // cambia la imagen del widget
      renderDialogo(); // muestra el texto correspondiente
      console.log("Se muestra el loop con el diálogo 2.");
      loopIsVisible = true;
    }, 30000); // 30 segundos
}

});

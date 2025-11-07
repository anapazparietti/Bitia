document.addEventListener("DOMContentLoaded", () => {

  let indice = 0;
  
  const dialogos = [
    "Estamos en el reproductor. Te enterarás sobre la IA en la música, canciones hechas con IA y demandas por copyright.",
    "Mira! Se ha desbloquedo otra aplicación. Vayamos a ver que es. ¡Qué emocionante!",
  ];

  const cuadro = document.getElementById("dialogo");
  const loop = document.querySelector(".loop");
  const demanda2 = document.getElementById("demanda2");

  function renderDialogo() {
    cuadro.textContent = dialogos[indice];
    console.log("Diálogo mostrado: " + dialogos[indice]);
  }

  // Mostrar el diálogo inicial si loop está visible
  if (getComputedStyle(loop).display === "block") {
    renderDialogo();
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        console.log("Presionaste espacio");
        if (indice === 0) {
          loop.style.display = "none";
          indice++;
        } else if (indice >= dialogos.length - 1) {
          indice = 0;
        }
      }
    });
  }

  const nucleo3 = document.querySelector("#nucleo3 img");

  // --- NUEVO CÓDIGO: click en demanda2 ---
  demanda2.addEventListener("click", () => {
    console.log("Click en demanda2 detectado, esperando 30 segundos...");

    setTimeout(() => {
      loop.style.display = "block"; // muestra el loop
      nucleo3.src = "img/nucleo3-desbloqueado.png"; // cambia la imagen del widget
      indice = 1; // pasa al segundo diálogo
      renderDialogo(); // muestra el texto correspondiente
      console.log("Se muestra el loop con el diálogo 2.");
    }, 30000); // 30 segundos
  });

});

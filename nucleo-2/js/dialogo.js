var loopIsVisible = true;

// ✅ Mostrar el valor de loopIsVisible cada segundo
setInterval(() => {
  console.log("loopIsVisible:", loopIsVisible);
  console.log("enCancionApp:", enCancionApp);
}, 1000);

document.addEventListener("DOMContentLoaded", () => {

  const cuadro = document.getElementById("dialogo");
  const loop = document.querySelector(".loop");
  const nucleo3 = document.getElementById("nucleo3");

  let indice = 0;
  
  const dialogos = [
    "Estamos en el reproductor. Te enterarás sobre la IA en la música, canciones hechas con IA y demandas por copyright.",
    "Mira! Se ha desbloquedo otra aplicación. Vayamos a ver que es. ¡Qué emocionante!",
  ];

  function renderDialogo() {
    cuadro.textContent = dialogos[indice];
    console.log("Diálogo mostrado: " + dialogos[indice]);
  }

  // --- 🔁 Función para pausar todos los videos si loopIsVisible === true ---
  function pauseVideosIfLoopVisible() {
    if (loopIsVisible) {
      const songVideo = document.getElementById("canciones-video");
      const demandaVideo = document.getElementById("demandas-video");
      const copyrightVideo = document.getElementById("copyright-video"); 

      if (songVideo && !songVideo.paused) {
        songVideo.pause();
        console.log("⏸ Video de canciones pausado por loopIsVisible");
      }
      if (demandaVideo && !demandaVideo.paused) {
        demandaVideo.pause();
        console.log("⏸ Video de demandas pausado por loopIsVisible");
      }
      if (copyrightVideo && !copyrightVideo.paused) {
        copyrightVideo.pause();
        console.log("⏸ Video de copyright pausado por loopIsVisible");
      }
    }
  }

  // --- Mostrar el diálogo inicial si el loop está visible ---
  if (getComputedStyle(loop).display === "block") {
    renderDialogo();
    loopIsVisible = true;
    pauseVideosIfLoopVisible();

    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyZ"|| event.code === "Equal" || event.code === "NumpadAdd") {
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
  } else {
    loopIsVisible = false;
  }

  // --- Último diálogo después de 30 segundos ---
  function ultimoDialogo() {
    console.log("El último diálogo se muestra después de 30 segundos");
    setTimeout(() => {
      loop.style.display = "block"; // muestra el loop
      nucleo3.src = "img/nucleo3-desbloqueado.png"; // cambia la imagen
      renderDialogo();
      console.log("Se muestra el loop con el diálogo 2.");
      loopIsVisible = true;
      pauseVideosIfLoopVisible();
    }, 30000);
  }

  // --- 👁️ MutationObserver: detectar si aparece un nuevo video de demandas ---
  const observer = new MutationObserver(() => {
    pauseVideosIfLoopVisible();
  });
  observer.observe(document.body, { childList: true, subtree: true });

});

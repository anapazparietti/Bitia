let enCancionApp = false;
let enDemandasApp = false;

document.addEventListener("DOMContentLoaded", () => {
  let selectedButton = null; // Guarda el botón seleccionado actualmente
  let index=0;

  const buttons = document.querySelectorAll(".btn");
  const categories = document.querySelectorAll(".categoria");

//--- FUNCIÓN: Actualizar selección visual + categoría visible-----
  function actualizarCategoria() {
    // Quitar "selected" del botón anterior
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }

    // Marcar el nuevo botón
    selectedButton = buttons[index];
    selectedButton.classList.add("selected");

    console.log("Botón seleccionado:", selectedButton.id);

    // Mostrar solo la categoría correspondiente
    const id = selectedButton.id;
    categories.forEach(cat => {
      cat.style.display = cat.classList.contains(id) ? "block" : "none";
    });
  }

  //--- CLICK en botones ---
   buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      index = i;
      actualizarCategoria();
    });
  });

  // Seleccionar inicialmente la primera categoría
  actualizarCategoria();

  
// --- WHEEL GLOBAL ---
//control para debouncing (no permitir cambios muy rápidos).
let lastRueda = 0;
const RUEDA_DELAY = 40; // milisegundos
  window.addEventListener("wheel", (e) => {
//Usa performance.now() y compara con lastRueda para ignorar eventos si son muy seguidos.
    const now = performance.now();
    if (now - lastRueda < RUEDA_DELAY) {
      e.preventDefault();
      return;
    }
    lastRueda = now;

    e.preventDefault(); // para evitar scroll de página.

    if (e.deltaY > 0 && !loopIsVisible) {
      index = (index + 1) % buttons.length; // siguiente
    } else if (e.deltaY < 0 && !loopIsVisible) {
      index = (index - 1 + buttons.length) % buttons.length; // anterior
    }

    if(index ===1){
      enCancionApp = true;
      window.resetSongSelection = true;
      restartCopyrightVideo();
    }else{
      enCancionApp = false;
      closeActiveSong();  
    }
    if(index ===2){
      enDemandasApp = true;
      restartCopyrightVideo();
    }else{   
      enDemandasApp = false;
      closeActiveDemanda();
    }


    actualizarCategoria();
  }, { passive: false }); // necesario para que preventDefault funcione



  //--- TECLADO: tecla - para pausar/reproducir video copyright ---
window.addEventListener("keydown", (event)=>{
  // if(event.defaultPrevented){ return; }
    switch(event.code){
      // tecla - del teclado o del numpad
      case "Minus":
      case "NumpadSubtract":
      console.log("- pressed");
      if(!loopIsVisible){
       /* control de videos con el teclado */  
        const videoCopyright = document.getElementById("copyright-video");
        const videoDemandas = document.getElementById("demandas-video");

   
        if(selectedButton && selectedButton.id === "copyright"){
                if(videoCopyright.paused){
                    videoCopyright.play();
                }else{
                    videoCopyright.pause();
                }
              }
            
             }else if(selectedButton && selectedButton.id === "demandas"){
                  enDemandasApp = true;
                  if (videoDemandas && !videoDemandas.paused) {
                videoDemandas.pause();
                console.log("Pausé demandas-video");
             }else if(selectedButton && selectedButton.id == "canciones"){
                enCancionApp = true;
             }
            

}else { 
  console.log("NO se pausa porque loopIsVisible es true");
  enCancionApp = false;
  enDemandasApp = false;
}


                break;
        }
    });


  

});

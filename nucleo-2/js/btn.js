document.addEventListener("DOMContentLoaded", () => {
  let selectedButton = null; // Guarda el botón seleccionado actualmente

  const buttons = document.querySelectorAll(".btn");
  const categories = document.querySelectorAll(".categoria");

  // --- Botones de categoría ---
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Cambiar estado visual del botón
      if (selectedButton) { //si no es null
        selectedButton.classList.remove("selected"); //se le quita la clase selected para remover el estilo de botón activo anterior.
      }
      selectedButton = button; //Se actualiza selectedButton para que apunte al botón que acabas de clicar.
      selectedButton.classList.add("selected"); //se le añade la clase selected para aplicar el estilo de botón activo.
      
      console.log(selectedButton);// acá es donde se actualiza

      // Mostrar solo la categoría correspondiente
      const id = button.id; // copyright, canciones, demandas guarda el id del botón clicado
      categories.forEach(cat => {
        if (cat.classList.contains(id)) {
          cat.style.display = "block";
        } else {
          cat.style.display = "none";
        }
      });
    });
  });

  selectedButton = buttons[0];//inicialmente el primer botón está seleccionado
  selectedButton.classList.add("selected");//se le añade la clase selected para aplicar el estilo de botón activo.

  console.log(selectedButton);// esto se actualiza cada vez que se hace click en un botón, 
  //te devuelve el elemento html


/* control de videos con el teclado */  
videoCopyright = document.getElementById("copyright-video");

    window.addEventListener("keydown", (event)=>{
        if(event.defaultPrevented){ return; }
        switch(event.code){
            case "KeyP":
                console.log("P pressed");
            if(selectedButton && selectedButton.id === "copyright" && !loopIsVisible){
                if(videoCopyright.paused){
                    videoCopyright.play();
                }else{
                    videoCopyright.pause();
                }
              }
                break;
        }
    });


  

});

document.addEventListener("DOMContentLoaded", () => {
  let selectedButton = null;

  const buttons = document.querySelectorAll(".btn");
  const categories = document.querySelectorAll(".categoria");

  // --- Botones de categoría ---
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Cambiar estado visual del botón
      if (selectedButton) {
        selectedButton.classList.remove("selected");
      }
      selectedButton = button;
      selectedButton.classList.add("selected");

      // Mostrar solo la categoría correspondiente
      const id = button.id; // copyright, canciones, demandas
      categories.forEach(cat => {
        if (cat.classList.contains(id)) {
          cat.style.display = "block";
        } else {
          cat.style.display = "none";
        }
      });
    });
  });

  // --- Selección de demanda ---
  const demanda1 = document.getElementById("demanda1");
  const demanda2 = document.getElementById("demanda2");

  const video1 = document.querySelector(".demanda1");
  const video2 = document.querySelector(".demanda2");

  [demanda1, demanda2].forEach(demanda => {
    demanda.addEventListener("click", () => {
      if (demanda === demanda1) {
        console.log("demanda 1 seleccionada");
        demanda1.src = "img/demanda1-selected.png";
        video1.style.display = "block";
        video2.style.display = "none";
        demanda2.src = "img/demanda2.png";
      } else {
        console.log("demanda 2 seleccionada");
        demanda1.src = "img/demanda1.png";
        demanda2.src = "img/demanda2-selected.png";
        video1.style.display = "none";
        video2.style.display = "block";
      }
    });
  });

  // --- Estado inicial ---
  categories.forEach(cat => (cat.style.display = "none"));
});

document.addEventListener("DOMContentLoaded", () => {
  
  let ventanaActiva = null;

  const aplicacion = document.querySelectorAll('.widget');

  aplicacion.forEach(aplicaciones => {
    aplicaciones.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = aplicaciones.dataset.ventana;
      ventanaActiva = document.querySelector(`.calendario-ventana="${target}"]`);
      ventanaActiva.style.display = 'grid';
    });
  });

  document.addEventListener('click', (e) => {
    if (ventanaActiva && !ventanaActiva.contains(e.target)) {
      ventanaActiva.style.display = 'none';
      ventanaActiva = null;
    }  
  });
});

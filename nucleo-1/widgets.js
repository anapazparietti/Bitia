  const audioNucleo1 = document.getElementById('musica-nucleo-1')
  
  function widgetClickeable() {

  let ventanaActiva = null;
  const aplicacion = document.querySelectorAll('.widget');
  let widgetBarra = document.querySelector('.taskbar-widget');


  aplicacion.forEach(aplicaciones => {
    aplicaciones.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = aplicaciones.dataset.ventana;
      ventanaActiva = document.querySelector(`.ventana[data-ventana="${target}"]`);
      ventanaActiva.style.display = 'flex';
      widgetBarra.style.visibility = 'visible';
      audioNucleo1.currentTime = 0; 
      audioNucleo1.play().catch(err => {
      console.log("El navegador bloqueo el autoplay o hay otro error con la musica:", err);
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (ventanaActiva && !ventanaActiva.contains(e.target)) {
      ventanaActiva.style.display = 'none';
      ventanaActiva = null;
      widgetBarra.style.visibility = 'hidden';
      audioNucleo1.pause();
    }  
  });
}
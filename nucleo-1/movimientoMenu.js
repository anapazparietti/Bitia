document.addEventListener('DOMContentLoaded', () => {

  const contenedor = document.querySelector('.contenedor-3d');
  const ventanas = Array.from(document.querySelectorAll('.calendario-ventana'));
  let indice = 0;

  // Separaciones y cosas visuales entre las ventanas
  const ESPACIADO_X = 140;    
  const ESPACIADO_Z = 180;    
  const ROT_Y = 0;         
  const FRONT_Z = 160;      
  const FRONT_ESCALA = 1.06; 

  function actualizarVista() {
    ventanas.forEach((v, i) => {
      const offset = i - indice;
      const absOff = Math.abs(offset);

      // SI es la ventana del frente 
      if (offset === 0) {
        v.classList.add('front');
        v.style.transform = `translateX(0px) translateZ(${FRONT_Z}px) rotateY(0deg) scale(${FRONT_ESCALA})`;
        v.style.opacity = '1';
        v.style.zIndex = String(1000);
      } // Si es una de las ventanas de atras
      else {
        v.classList.remove('front');
        const dir = offset < 0 ? 1 : -1; 
        const x = offset * ESPACIADO_X;
        const z = -absOff * ESPACIADO_Z;
        const rotY = dir * ROT_Y; 
        v.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(1)`;
        v.style.opacity = String(Math.max(0.20, 1 - absOff * 0.25));
        v.style.zIndex = String(900 - absOff);
      }
    });
  }

  actualizarVista();

  let lastRueda = 0;
  const RUEDA_DELAY = 110; // Esto evita q un solo scroll cambie muchas ventanas

  window.addEventListener('wheel', (e) => {
    const now = performance.now();
    if (now - lastRueda < RUEDA_DELAY) {
      e.preventDefault();
      return;
    }
    lastRueda = now;

    e.preventDefault();

    // RUEDA HACIA ABAJO O HACIA ARRIBA
    if (e.deltaY > 0) indice++;
    else if (e.deltaY < 0) indice--;

    if (indice < 0) indice = 0;
    if (indice > ventanas.length - 1) indice = ventanas.length - 1;

    actualizarVista();
  }, { passive: false });

  // PARA MOVER CON FLECHAS DEL TECLADO  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'y' || e.key === 'Y') {
      indice = Math.min(ventanas.length - 1, indice + 1);
      actualizarVista();
    } else if (e.key === 'k' || e.key === 'K') {
      indice = Math.max(0, indice - 1);
      actualizarVista();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {

  const contenedor = document.querySelector('.contenedor-3d');
  const ventanas = Array.from(document.querySelectorAll('.calendario-ventana'));
  let indice = 0;

  // Estado del modo
  let modo = 'normal'; // puede ser 'normal' o 'right-bar'

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

      if (offset === 0) {
        v.classList.add('front');
        v.style.transform = `translateX(0px) translateZ(${FRONT_Z}px) rotateY(0deg) scale(${FRONT_ESCALA})`;
        v.style.opacity = '1';
        v.style.zIndex = String(1000);
      } else {
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
  const RUEDA_DELAY = 110;

  // -------- SCROLL CONTROL --------
  window.addEventListener('wheel', (e) => {
    if (modo !== 'normal') return; // si está en right-bar, no hace nada

    const now = performance.now();
    if (now - lastRueda < RUEDA_DELAY) {
      e.preventDefault();
      return;
    }
    lastRueda = now;

    e.preventDefault();

    if (e.deltaY > 0) indice++;
    else if (e.deltaY < 0) indice--;

    if (indice < 0) indice = 0;
    if (indice > ventanas.length - 1) indice = ventanas.length - 1;

    actualizarVista();
  }, { passive: false });


  // -------- TECLADO CONTROL (y/k) --------
  window.addEventListener('keydown', (e) => {
    if (modo !== 'normal') return; // también desactiva en right-bar

    if (e.key === 'y' || e.key === 'Y') {
      indice = Math.min(ventanas.length - 1, indice + 1);
      actualizarVista();
    } else if (e.key === 'k' || e.key === 'K') {
      indice = Math.max(0, indice - 1);
      actualizarVista();
    }
  });


  // -------- DETECTAR MANTENER Z 2 SEGUNDOS --------
  let zPresionada = false;
  let zTimer = null;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'z' || e.key === 'Z') {
      if (!zPresionada) {
        zPresionada = true;
        zTimer = setTimeout(() => {
          // Toggle de modo
          modo = (modo === 'normal') ? 'right-bar' : 'normal';
          console.log(`Modo cambiado a: ${modo}`);
          // Podés agregar alguna animación o cambio visual acá si querés
        }, 2000); // 2 segundos
      }
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'z' || e.key === 'Z') {
      zPresionada = false;
      clearTimeout(zTimer); // si soltó antes de los 2s, no cambia nada
    }
  });

});

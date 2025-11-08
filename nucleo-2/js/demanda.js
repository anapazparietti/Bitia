document.addEventListener("DOMContentLoaded", () => {

    // acá me conviene la lógica del calendario que hice en el trabajo anterior

    // --- Datos de las demandas ---
    const demandaInfo = [
        {titulo: "El caso Gilbert O’Sullivan vs. Biz Markie", video: "video/video1.mp4"},
        {titulo: "RIAA vs. Suno y Udio", video: "video/video2.mp4"}
    ];

    const demanda = document.getElementById("cuerpo-demanda");
    const demandaBtn = document.querySelectorAll(".btn-demanda");

    let activeIndex = null; // guarda el índice de la demanda activa

    // --- función para mostrar una demanda ---
    function renderDemanda(index) {
        const demandaVisible = demandaInfo[index];
        demanda.innerHTML = `
            <h1>${demandaVisible.titulo}</h1>
            <div class="video">
                <video src="${demandaVisible.video}" id="demandas-video" autoplay></video>
            </div>
        `;

        // --- Si isLoopVisible está activo, pausamos el video inmediatamente ---
       

    }

    // --- función para cerrar (resetear) una demanda ---
    function resetDemanda() {
        demanda.innerHTML = ""; // borra el contenido
        activeIndex = null;     // no hay demanda activa
    }

    // --- evento al hacer click en los botones de demanda ---
    demandaBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {

            if(!loopIsVisible){
            // Si el usuario hace click en la misma demanda, se cierra (toggle)
            if (activeIndex === i) {
                resetDemanda();
                btn.src = `img/demanda${i + 1}.png`; // vuelve a la imagen no seleccionada
                activeIndex = null;
                return;
            }

            // Si había otra demanda activa, la cierra antes
            if (activeIndex !== null) {
                demandaBtn[activeIndex].src = `img/demanda${activeIndex + 1}.png`; // vuelve a la imagen no seleccionada
                resetDemanda();
            }

            // Abre la nueva demanda
            btn.src = `img/demanda${i + 1}-selected.png`; // cambia a la imagen seleccionada
            renderDemanda(i);
            activeIndex = i;
             const video = document.getElementById("demandas-video");
            } 

        });
    });

    // --- cerrar demandas al cambiar de categoría ---
    const copyright = document.getElementById("copyright");
    const canciones = document.getElementById("canciones");

    function closeActiveDemanda() {
        // si hay una demanda activa, la cierra
        if (activeIndex !== null) {
            demandaBtn[activeIndex].src = `img/demanda${activeIndex + 1}.png`; // vuelve a la imagen no seleccionada
            resetDemanda();
        }
    }

    if (copyright)
        copyright.addEventListener("click", closeActiveDemanda);
    if (canciones)
        canciones.addEventListener("click", closeActiveDemanda);




});

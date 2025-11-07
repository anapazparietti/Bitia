document.addEventListener("DOMContentLoaded", () => { 
    
    const songVideo = document.querySelector("#song-video video"); //HTMLVideoElement

    const songBtn = document.querySelectorAll(".song"); 
    
    const infoSong = document.querySelectorAll(".hide-msj");

    const selectedStyle = [ 
        {img1: "img/dust.png", img2: "img/dust-selected.png", video: "video/dustontheWind.mp4"}, 
        {img1: "img/rumbaCongo.png", img2: "img/rumbaCongo-selected.png", video: "video/rumbaCongo.mp4"},
        {img1: "img/heart.png", img2: "img/heart-selected.png", video: "video/heart.mp4"}, 
        {img1: "img/nostalgia.png", img2: "img/nostalgia-selected.png", video: "video/nostalgia.mp4"},
        {img1: "img/pasarella.png", img2: "img/pasarella-selected.png", video: "video/pasarella.mp4"} 
    ];

    //como el video no es un arreglo se hace una función para cambiar el src del video sin que se rompa el código
    function renderVideo(index){
        if(!songVideo) return; //!songVideo comprueba si la variable es null, undefined o falsy. Si no existe el <video> la función sale inmediatamente con return —esto evita errores tipo Cannot read property 'src' of null.
        songVideo.src = selectedStyle[index].video;
        songVideo.style.display = "block";

        // reload the media and autoplay
        if (typeof songVideo.load === "function"){ //Esta línea comprueba si el elemento tiene un método load. Es una guardia segura antes de llamar load().
            songVideo.load();
        }
        songVideo.play().catch(() => {/* autoplay might be blocked by browser */});
    }

    function resetVideo(){
        if(!songVideo) return;
        songVideo.pause();
        songVideo.currentTime = 0; // Reset playback position to the start
        songVideo.style.display = "none";
        songVideo.src = "";
    }

    //cambio de estilo-----
    function styleChange(song, i){
        let info = infoSong[i];
        let visible = info.style.display === "block";
        if(!visible){ 
            infoSong[i].style.display = "block"; 
            songBtn[i].src = `${selectedStyle[i].img2}`;
            renderVideo(i); 
        } else { 
            infoSong[i].style.display = "none"; 
            songBtn[i].src = `${selectedStyle[i].img1}`;
            resetVideo(); 
        } 
    }

//  comprobar que no haya otra canción seleccionada y cambiar el estilo en ser necesario
    let selectedButton = null;
    let selectedIndex = null;

    songBtn.forEach((song, i) => {
        song.addEventListener("click", () => {

            // Si el usuario hace click en la misma canción activa, la cierra
            if (selectedIndex === i) {
                styleChange(song, i);
                selectedButton = null;
                selectedIndex = null;
                return;
            }

            // Si había otra canción seleccionada, la cierra antes
            if (selectedButton !== null && selectedIndex !== null) {
                infoSong[selectedIndex].style.display = "none";
                selectedButton.src = `${selectedStyle[selectedIndex].img1}`;
            }

            // Activa la nueva canción
            styleChange(song, i);
            selectedButton = song;
            selectedIndex = i;
        });
    });

// ejecutar el else de styleChange al cambiar de categoría ---
    const copyright = document.getElementById("copyright");
    const demandas = document.getElementById("demandas");

    function closeActiveSong() {
        // si hay una canción activa, ejecutar el "else" de styleChange
        if (selectedButton !== null && selectedIndex !== null) {
            // Ejecuta la parte del else manualmente
            infoSong[selectedIndex].style.display = "none"; 
            selectedButton.src = `${selectedStyle[selectedIndex].img1}`;
            resetVideo(); 

            // limpia las referencias
            selectedButton = null;
            selectedIndex = null;
        }
    }

    // Cada vez que cambies de categoría, se cierra cualquier canción abierta
    if (copyright) //comprueba que el elemento existe antes de añadir el event listener
        copyright.addEventListener("click", closeActiveSong); //“Cuando el usuario haga click en este elemento ejecutá la función closeActiveSong().”
    if (demandas)
        demandas.addEventListener("click", closeActiveSong);

});

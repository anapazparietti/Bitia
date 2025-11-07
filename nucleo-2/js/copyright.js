document.addEventListener("DOMContentLoaded", () => {

/*e = the "event" that just happened.
It lets you know what key, what mouse button, or what element was involved in the event. */

video = document.getElementById("copyright-video");

    window.addEventListener("keydown", (event)=>{
        if(event.defaultPrevented){ return; }
        switch(event.code){
            case "KeyP":
                console.log("P pressed");
                if(video.paused){
                    video.play();
                }else{
                    video.pause();
                }
                break;
        }
    });

    function restartVideo(){
        video.pause();
        video.currentTime = 0;
    }

    // --- pararvideo al cambiar de categoría ---
    const demandas = document.getElementById("demandas");
    const canciones = document.getElementById("canciones");

    if (demandas){
        demandas.addEventListener("click", restartVideo);
    };
    if (canciones){
        canciones.addEventListener("click", restartVideo);
    };

});

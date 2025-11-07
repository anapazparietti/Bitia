document.addEventListener("DOMContentLoaded", () => {

// the element with id "song-video" is a container div; select the actual <video> inside it
const songVideo = document.querySelector("#song-video video"); // HTMLVideoElement

const songSelect = document.querySelectorAll(".song");

const infoSong= document.querySelectorAll(".hide-msj");

const selectedStyle =[
    {img1: "img/dust.png", img2: "img/dust-selected.png", video: "video/dustontheWind.mp4"},
    {img1: "img/rumbaCongo.png", img2: "img/rumbaCongo-selected.png", video: "video/rumbaCongo.mp4"},
    {img1: "img/heart.png", img2: "img/heart-selected.png", video: "video/heart.mp4"},
    {img1: "img/nostalgia.png", img2: "img/nostalgia-selected.png", video: "video/nostalgia.mp4"},
    {img1: "img/pasarella.png", img2: "img/pasarella-selected.png", video: "video/pasarella.mp4"}
  ];

 function renderVideo(index) {
    if (!songVideo) return; // safety
    songVideo.src = selectedStyle[index].video;
    songVideo.style.display = "block";
    // reload the media and autoplay
    if (typeof songVideo.load === "function") {
      songVideo.load();
    }
    songVideo.play().catch(() => {/* autoplay might be blocked by browser */});
  }


songSelect.forEach((song,i)=>{
    song.addEventListener("click", () =>{
        
        let info = infoSong[i];
        let visible = info.style.display === "block";

        // Ocultar todos los mensajes y restablecer imágenes
        if(!visible){
             infoSong[i].style.display = "block";
       // the .song node is a button that contains an <img>
       const btnImg = song.querySelector('img');
       if (btnImg) {
           btnImg.src = selectedStyle[i].img2;
           renderVideo(i);
       }
   } else {
       infoSong[i].style.display = "none";
       const btnImg = song.querySelector('img');
       if (btnImg) btnImg.src = selectedStyle[i].img1;
       if (songVideo) songVideo.style.display = "none";
         }
    });
});


});

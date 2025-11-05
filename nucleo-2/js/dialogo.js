document.addEventListener("DOMContentLoaded", () => {

let indice = 0;
  
const dialogos = [
  "Estamos en el reproductor. Te enterarás sobre la IA en la música, canciones hechas con IA y demandas por copyright.",
  "Mira! Se ha desbloquedo otra aplicación. Vayamos a ver que es.¡Que emocionante!",
];

const cuadro = document.getElementById("dialogo");
const loop = document.querySelector(".loop");

function renderDialogo(){
  cuadro.textContent = dialogos[indice];
 console.log("diálogo mostrado: " + dialogos[indice]);
};

//estoy tratando de que este código sea compatible con los otros nucleos

if(getComputedStyle(loop).display === 'block'){
  renderDialogo();
  document.addEventListener("keydown", (event)=>{ //falta definir con que tecla avanzas el dialogo o si es automatico
    console.log("estas dando espacio");
    if(indice === 0){
      loop.style.display = 'none';
      indice++;
    }else if(indice >= dialogos.length -1){
      indice = 0;
    }
  });
};
});
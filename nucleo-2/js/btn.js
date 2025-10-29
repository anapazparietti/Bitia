//para cambiar estado del boton a seleccionado sin que se deseleccione al hacer click en otro lado de la pantalla
//si lo que necesitas es que al hacer click en otro lado vuelva al estilo original (se deseleccione) usa directamente :focus en el Css
// al hacer click en otro boton, el anterior se deselecciona
document.addEventListener("DOMContentLoaded", () => {
selectedButton = null;

const buttons = document.querySelectorAll(".btn"); //agregar esta clase a los botones en el HTML

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (selectedButton) {
            selectedButton.classList.remove("selected"); //no usar directamente esta clase en css, ser especifico (ver base-nucleo2.css)
        }
        selectedButton = button;
        selectedButton.classList.add("selected");
    });
});

});
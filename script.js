//Variables
let btnAcademico = document.getElementById("academico");
let btnIntereses = document.getElementById("intereses");
let btnHabilidades = document.getElementById("habilidades");
let caja1= document.querySelector(".caja1");
let caja2= document.querySelector(".caja2");
let caja3= document.querySelector(".caja3");


//Evento Click de los botones del div Contenedor4
btnAcademico.addEventListener("click", mostrarDiv);
btnIntereses.addEventListener("click", mostrarDiv);
btnHabilidades.addEventListener("click", mostrarDiv);


//Función para mostrar y ocultar las secciones del Contenedor4
function mostrarDiv(){
    let seleccionado= this.value;
    if(seleccionado == 1)
    {
        caja1.style.display="block";
        caja2.style.display="none";
        caja3.style.display="none";
    }
    else if(seleccionado == 2)
    {
        caja2.style.display="block";
        caja1.style.display="none";
        caja3.style.display="none";
    }
    else
    {
        caja3.style.display="block";
        caja1.style.display="none";
        caja2.style.display="none";
    }
    
}
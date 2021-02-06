console.log(document.title);
document.title = "TituloJs";
console.log(document.body);
var h1 = document.getElementsByTagName("h1");
console.log(h1);
h1[0].innerHTML = "Prueba DOM";

var boton =document.getElementById("boton");
boton.addEventListener("click", mensaje);

function mensaje()
{
    alert("Mensaje");
}
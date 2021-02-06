//#region  metodos

function agregarNumero(numero)
{
    operacionActual = operacionActual.toString() + numero.toString();
    acualizarResultado();
}
function elegirOperacion(op)
{
    if(operacionActual === "")
    {
        return
    }
    else if (operacionAnterior !== "")
    {
        console.log("Calculo")
        calcular();
        
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}
function calcular()
{
    var nuevoCalculo;
    console.log(operacionAnterior);
    const opAnterior = parseFloat(operacionAnterior);
    const opActual = parseFloat(operacionActual);
    
    if(isNaN(opActual) || isNaN(opAnterior))
    {
        console.log(opActual);
        console.log(opAnterior);
        return;
    }
    console.log(operacion);
    switch(operacion)
    {
        case "/":
            nuevoCalculo = opAnterior / opActual;
            console.log("operacion");
            break;
        
        case "+":
            nuevoCalculo = opAnterior + opActual;
            console.log("calcular");
            break;;

        case "-":
            nuevoCalculo = opAnterior - opActual;
            console.log("operacion");
            break;

        case "X":
            nuevoCalculo = opAnterior * opActual;
            console.log("operacion");
            break;
        default:
            return;
    }
    operacionActual = nuevoCalculo;
    operacion = undefined;
    operacionAnterior = "";
    console.log(nuevoCalculo);
    console.log("calculo");
    acualizarResultado();
}
function acualizarResultado()
{
    resultado.value = operacionActual;
}
function limpiar()
{
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
}
//#endregion

//#region variables
const botones  = document.getElementsByName("numero");
const operadores = document.getElementsByName("operador");
const igual = document.getElementsByName("igual")[0];
const borrar = document.getElementsByName("borrar")[0];
var resultado = document.getElementById("display");
var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;

//#endregion

//#region Metodos DOM

botones.forEach(function(boton){

    boton.addEventListener("click", function()
    {
        agregarNumero(boton.innerText);
    })
})

operadores.forEach(function(boton){

    boton.addEventListener("click", function()
    {
        elegirOperacion(boton.innerText);
    })
})

igual.addEventListener("click", function(){

    calcular();
    acualizarResultado();
}
);
borrar.addEventListener("click", function(){
    limpiar();
    acualizarResultado();
});

//#endregion
limpiar();
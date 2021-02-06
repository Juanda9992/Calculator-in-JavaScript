
//#region Primer Modulo Curso JS

/*  

var nombre = "Juancho"; //En JavaScript para definir una variable se usa la palabra Var
var edad = 10; //No hay necesidad de definir el tipo de variable, este loo detecta automaticamente

// JAVASCRIPT NO ES DE TIPADO ESTATICO (SIMILAR A PYTHON) 

alert("Nombre: " + nombre + " edad: " + edad); //alert es una funcion que despliega una advertencia en el navegador
console.log(typeof(nombre)) //typeof retorna el tipo de la variable que se tome como parametro
console.log("Hello World"); //console.log muestra informacion que se quiera mostrar en la consola del navegador (similar a Unity y C#) 
console.log( 5+ 5 );

var tieneEmpleo = false;
console.log(tieneEmpleo);

var trabajo = null;
console.log(typeof(trabajo));

// - - - - - - - OPERADORES MATEMATICOS - - - - -
var edadMoni = 2;
var edadPirci = 3;
var diferenciaEdad = edadPirci - edadMoni;
var sumaEdades = edadPirci + edadMoni;
console.log(diferenciaEdad);
console.log(sumaEdades);


// - - - - - - - - OPERADORES LOGICOS  - - - - - - -
var pirciMayor = edadPirci > edadMoni; // > Mayor que < Menor que
var moniMayor = edadMoni > edadPirci; 
var moniMayorTrue = !(edadMoni > edadPirci) // ! Negacion, invierte un booleano
console.log(pirciMayor, moniMayor, moniMayorTrue);

edadMoni = 5;
edadMoni++; //INCREMENTO
edadMoni--;//DECREMENTO
console.log(edadMoni);

// - - - - - - -- -  ASIGNACION - - - - - - - - - -
edadMoni += 4; // += es equivalente a: a = a + b
edadMoni -= 4; // -= es equivalente a: a = a - b
edadMoni *= 4; // *= es equivalente a a = a * b
console.log(edadMoni);
*/

//#endregion

//#region Segundos Modulo Curso JS


// - - - -- - - - -  Sentencias  if / else - - - - - - 
var nombre = "Moni";
var comprometida = !true;

if (comprometida == true)
{
    console.log(nombre + " es casada" )
}
if (comprometida == false)
{
    console.log(nombre + " es soltera" )
}

// - - - - - - - IF anidados - - - - - 
nombre2 = "Monson"
edad = 8
if (edad < 12)
{
    console.log(nombre + " es un niño");
}
else if(edad >11 &&  edad < 18)
{
    console.log(nombre + "es un adolescente");
}
else if(edad >17 &&  edad < 60)
{
    console.log(nombre + "es un audulto");
}
else
{
    console.log(nombre + " es un hombre mayor");
}

// - - - - - - - - -  SENTENCIA SWITCH - - - - - - -

var mes = 2

switch(mes)
{
    case 1:
        console.log("Es Enero");
        break;
    case 2:
        console.log("Es Febrero");
        break;
    case 3:
        console.log("Es Marzo");
        break;
    case 4:
        console.log("Es Abril");
        break;
    case 5:
        console.log("Es Mayo");
        break;
    default:
        console.log("Mes no encontrado");
}


// - - - - - - - - - - SENTENCIA FOR - - - - - - - 
for (var i = 0; i <= 0; i++)
{
    console.log(i);
}

// - - - - - - - - SENTENCIA WHILSE Y DO WHILE - - - - - -
var i = 1;
while(i <= 0)
{
    console.log(i);
    i++;
}

var i = 12;

do
{
    console.log(i);
    i++;
}while(i <= 10);

//#endregion

////#region Tercer Modulo Curso JS

//- - - - - - - FUNCIONES - - - - -- 

function alCubo(numero)
{
    return numero * numero;
}

function enviarMensaje()
{
    return "Este es el mensaje enviado"
}
function sumar(a,b,c = 10)
{
    return a + b + c;
}
var mensaje = enviarMensaje();

var resultado = sumar(1,2,2);
var resultado2 = sumar(10,10);
// console.log(resultado);
// console.log(resultado2);

// - - - - - - - ARRAYS - - - - -

var gatos = new Array("Moni","Mandy","Yinka");
console.log(gatos[2]);

var vegetales = new Array("Tomate", "Lechuga", "Calabaza", "Espinaca");
console.log(vegetales[3]);

gatos[2] = "Maya";
vegetales[3] = "Cebolla";

console.log(gatos.length);
for(var i = 0; i <= gatos.length - 1; i++)
{
    console.log(gatos[i]);
}

vegetales.forEach(function(nombre, indice)
{
    console.log(nombre,indice)
})

gatos.push("Larry", "Dixie"); //push es un metodo que agrega un objeto nuevo al array
gatos.unshift("Pirson"); //unshuft agrega un nuevo elemento al principio del array
gatos.shift(), //Elimina el primer elemento del array
gatos.pop(); // pop elimina el ultimo elemento del arreglo

var posicion = gatos.indexOf("Mandy"); // indexOf regresa el indice de un elemtno del array

gatos.splice(3,1); //Elimina un numero especifico de elementos desde una posicion especifica



//#endregion

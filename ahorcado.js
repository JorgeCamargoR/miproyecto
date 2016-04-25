var figura, l ;
var palabra;
var palabras = new Array("Amanecer", "Petra", "Aprendizaje", "Veracruz", "Bimba", "Corazon", "Menguante", "Piedra", "Lectura", "Viajar");

var hombre;


var Ahorcado = function(con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	this.dibujar();
}


Ahorcado.prototype.dibujar = function()
{
	var figura = this.contexto;

 //Dibujo del ahorcadero
    figura.beginPath();
    figura.strokeStyle = "black";
    figura.lineWidth = 10;
    figura.moveTo(100,50);
    figura.lineTo(200,50);
    figura.lineTo(200,250);
    figura.lineTo(150,250);
    figura.lineTo(250,250);
    figura.moveTo(100,50);
    figura.lineTo(100,100);
    figura.stroke();
    figura.closePath();

    if(this.intentos > 0){

//Dibujo de la cabeza
    figura.beginPath();
    figura.strokeStyle = "red";
    figura.lineWidth = 3;
    figura.arc(100,120,20,(Math.PI*2),false);
    figura.stroke();
    figura.closePath();
    
  
    if(this.intentos > 1){
     
       //Dibujo del tronco
    figura.beginPath();
    figura.moveTo(100,140);
    figura.lineTo(100,200);
    figura.stroke();
    figura.closePath();
    
     
     if(this.intentos > 2){
	  //Dibujo de las manos
    figura.beginPath();
    figura.moveTo(100,140);
    figura.lineTo(70,170);
    figura.moveTo(100,140);
    figura.lineTo(130,170);
    figura.stroke();
    figura.closePath();
   

     if(this.intentos > 3){
       // Dibujo de los pies
    figura.beginPath();
    figura.moveTo(100,200);
    figura.lineTo(70,230);
    figura.moveTo(100,200);
    figura.lineTo(130,230);
    figura.stroke();
    figura.closePath();
 
       
     if(this.intentos > 4){
     //Dibujo de la X ojos muertos
    figura.beginPath();
    figura.moveTo(90,110);
    figura.lineTo(110,130);
    figura.moveTo(90,130);
    figura.lineTo(110,110);
    figura.stroke();
    figura.closePath();
    }
   }
  }
 }
}

}

Ahorcado.prototype.trazar = function()
{
   
   this.intentos++;

   if(this.intentos>=this.maximo)
   {
   	this.vivo = false;
   	alert("Estás muerto!!!");
   }
   this.dibujar();
}

function inicio()
{
	    palabra = palabras[Math.floor(Math.random()*10)];

	l = document.getElementById("letra");

	var b = document.getElementById("boton");


	var canvas = document.getElementById("c");

    var contexto = canvas.getContext("2d");

    hombre = new Ahorcado(contexto);

     //Convierte a mayúscula un texto
    palabra = palabra.toUpperCase();

    //Declaro un array con n espacios de acuerdo al largo de la plabara
    espacio = new Array(palabra.length);

    //Agregamos una función que se dispare al dar click al botón
    b.addEventListener("click", agregarLetra);

    mostrarPista(espacio);
    l.focus();

}


function agregarLetra()
{
    var letra = l.value;
    l.value = "";
    mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra(palabra, ahorcado, letra)
{
    var encontrado = false;
    var p;
    letra = letra.toUpperCase();
    for (p in palabra)
    {
        if (letra == palabra[p])
        {
            espacio[p] = letra;
            encontrado = true;
        }
    }
    mostrarPista(espacio);

    // Si NO lo encontré
    if(!encontrado)
    {
        ahorcado.trazar();
    }

    if(!ahorcado.vivo)
    {
        alert("la palabra era : \n" + palabra)
        mostrarPista(espacio);
        //Mostrar la palabra entera al morir(Tarea)
    }
    l.focus();
}

function mostrarPista(espacio)
{
    var pista = document.getElementById("pista");
    var texto = "";
    var textoCompara= "";
    var i;
    var largo = espacio.length;

    for(i = 0; i<largo; i++)
    {
        if(espacio[i] != undefined)
        {
            texto = texto + espacio[i] + " ";
            textoCompara = textoCompara + espacio[i];
        }
        else
        {
            texto += "_ ";
        }
    }
    pista.innerText = texto;

    if(textoCompara == palabra)
    {
    	alert("Ganaste el juego!!!");
    }
   l.focus();
}

// https://platzi.com/clases/programacion-basica/concepto/clase-7-2/ciclos-de-texto-y-algoritmo-quotahorcadoquot/material/
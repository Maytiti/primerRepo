//Caundo buscamos modificar un valor de un input html, generalmente utilizamos la:
const inputOne = document.getElementById("inputText").value;
const otroElemento = imputOne.getElementById("")   //Este no se podria poner dos veces el api de getElementById si tiene el Value 

//La estructura de como interactuamos con el Dom en JS es la siguiente 
//1. Palabra reservada : document DOM
//2. Utilizamos el metodo/Api -> getElementById()  este ya le pertenece al documento  YA ES UN ELEMENTO
//3. Utilizamos el atributo del elemento que en este caso, conocemos previamente por el atributo input, por este conocimeinto previo   value.   LLEGAMOS A UN ATRIBUTO DE UN ELEMENTO
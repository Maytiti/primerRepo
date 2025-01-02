//pARA CREAR Y ASIGNAR UN ARREGLO  (dos maneras)  
//const array =[];
const numeros =[1,2,3,4,5,6];

//const frutas = new Array ("manzana", "pera", "sandia"); //Array es arreglo
let frutas = new Array ("manzana", "pera", "sandia");  //Cambiamos a let porque vamos a modificar 
//En los arrays podemos acceder por medio del index

console.log(numeros[4]) // en el arreglo numeros en el indice 4 esperamos que se imprima en consola el numero 5  aqui accedimos al valor, porque no estamos creando

frutas[0]= "Uvas"; //aqui indicamos que en donde habia manzanas, queremos uvas se le llama ASIGNACION

console.log(frutas[0]); //Espero que el arreglo en el indice 0 me retome uvas, aqui lo imprime 

//los arreglos tienen atributos y uno de ellos es la longitud = lenght 
let dinamico = [];  
//para acceder a la longitud del parametro esperamos el largo del arreglo 
console.log(dinamico.length);//Vamos a esperar el largo del arreglo

//Existen metodos pre-creados para los arreglos, ya que los arreglos son obejtos, uno de estos son:
//indexOf(), Busca el valor y retorna el indice.   para usar un metodo de un arreglo se usa la syntaxis: nombre_arreglo.nombreMetodo  buscamos que el arreglo de frutas tenga uvas

console.log(frutas.indexOf("Uvas")); //esperamos de retorno el indice de donde estan las uvas con indice [0]  //de parametro le dimos uvas 
console.log(frutas.indexOf("manzana")); //  retornar un -1 ya que manzana no esta en el arreglo y si no esta se lanza el -1 (lo dice la documentacion)

//El método push agrega uno o mas elementos al final de la matriz y decuelve la nueva longitud de la matriz 

numeros.push(7);
numeros.push(8);
console.log(numeros); //despues del push esperamos ver del 1 al 8
numeros.shift(); //Esperamos ver el arreglo sin el primer elemento
console.log(numeros);
//let primerElemento= numeros.shift();
//console.log(primerElemento);



//Slice= corta, hace un corte a dos indices: El de inicio y el de final y hace una copia temporal para no modificar el original hace un clon modificado de mi arreglo original

let clonFrutas = frutas.slice(2);  //los parentesis asi son para invocar //empieza a extraer desde el 2 pero si se quiere delimitar hasta que posicion se le pone (2,x) X= hasta el index que queremos+
//esperamos que el arreglo clon con el elemento sandia porque es el del indice2
console.log(clonFrutas);
let clonNumeros = numeros.slice(-2,-1); //deberiamos esperar un clon del arreglo numeros que deberia ser el 7 o 6  
console.log(clonNumeros);
//let clonNumeros = numeros.slice(-2,-1);
//console.log(clonNumeros);

//Ciclos
//Switch, if, break, loop, while, do while
// for -  n numero de veces de un bloque de código
// for in - ciclos en las propiedades de un objeto
// for of - valores de un objeto que tiene capacidad de ser iterado
// while -  ciclos de un bloque de codido "mientras" ciertara condición es true
// do/while - > ciclo que hace un bloque de código mientras la condición espcedificada sea true

console.log (frutas.length); //nuestro length inicia en 1 por eso se pone -1 para que en el 4 elemento no salga un undefined
for(let i=0; i<= frutas.length -1; i++){
    console.log("-------aqui se ejecuta mi for------");
    console.log(i);
    console.log(frutas[i]);   //i (index)= es la variable que va a recorrer //Lo que esperamos es que se imprima en la consola uno a uno los valores dentro del arreglo de frutas
    //cuando de usa <= llega hasta el lenght 3
}


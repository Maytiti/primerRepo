/*  Tipo de datos y variables:  
"variables": es un espacio de memoria de nuestro programa  tipo de formas para declarar nuestras variables (3):
Var, Let y Const

var: tiene un alcance global (presentaba errores)
let:  tiene alcance local
const: es una constante, es decir que son cosas no modificables  (nombre, fecha de nacimiento, valor de pi)

Scope: alcance de mis varianbles

String: cadena de texto
Number: numero 
Boolean: true or false (0/1)
undefined: no definido
null: no tiene un valor
NaN: No es un número

*/

//let nombre; declaro mi variable
//nombre = "Mayte"; inicializo mi variable
let nombre = "Mayte";  //cuando de usan las "" ya sabemos que es string
nombre= "MariTere";

const apellido = "Castañeda"; 
console.log(apellido);

console.log(nombre);

let telefono = null; //null

let direccion; 

//para registrar varios datos/ variables en una linea se utilizan las multiples variables

let num1 = 15;
let num2 = 18; 
let num3 = 25;

//Encasillamiento o cohersión: es una conversión automatica
// -typeof me permite saber el tipo de dato

let precio = prompt ("Cúal es tu rango de inversión");
console.log(typeof precio); // typeOf para identificar con que tipo de dato estoy trabajando

//Objeto number
let numero1 ="41";
let newNumber = Number(numero1); //Number es un typeof 

console.log(typeof newNumber);

//conversion de tipo de dato string a number  PARSEINT numeros enteros y flotantes(con decimal)

let cp="02925"; //string
let numcp = parseInt(cp); //parseInt convierte a numero  //tambien se podría usar parseFloat
console.log(typeof numcp);

//Conversión de un numero a string
let edad = 26; //numero
let edadString = edad.toString();
console.log(edadString);

//cambio de boolean a string
let ine= true; //Booleano
let ineString = ine.toString(); //se declara nueva variable y se pasa a toString
//se podria imprimir lo que es el ine console.log(ineString);
console.log(typeof ineString); //para ver que cambie a string

//ejemplo de NaN
console(nombre * edad);

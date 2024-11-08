/*  POO

- Clases se refiere a nuestro molde o plantilla para que podamos crear objetos  Utilizan ??????
- Constructor: Funcion obligatoria para crear objetos (Chef) a traves de caracteristicas o atributos especificas 
- Objetos: En lo que contruimos a traves de la clase y el constructor 
- Atributo: Se refiere a las características o propiedades de mi objetos
- Método: Lo que hace nuestro obejto (saludar, bricar, correr)
- Instanciación : cuando ya tengo  mi clase, constructor y el objeto 


Herencia; cuenta con la palabra reservada: "extends" y en automatico. La herencia permite reutilizar el código de la clase padre en la clase hijo

Polimorfismo: El comportamiento de cada obejto de la misma clase a un método. todos pueden “caminar al mismo tiempo ” pero no igual

Encapsulamiento: Se refiere a encerrar y/o ocultar el código 
Abstracción: Se refiere a ser muy especificos con los objetos (resumir)

Moduladidad: Nos permite  reutilizar código, hacer modificaciones, tener orden, entender mantener ell codigo y tener mejor abordaje para solucionar problemas


Que son los metodos estaticos? palabra reservada static y es una FUNCIÖN que nos permite ejecutar una clase sin intanciar el objeto
-->Que son los metodos accesores? 
Estso métodos no modifican el arreglo(no mutan) y retornan una representacion del arreglo.
TIPOS DE ARREGLOS DE ACCESORES:
-concat: *permite tomar varios arreglos y unirlos* en un solo para ser asignaso posteerir mente a una variable
-join: *coniverte el arreglo en un string* y como parámetro permite introducir un carácter separador (ejemplo cuando se pone un telefono y se pide que se separe por -)
-slice: permite extraer una sección de la lista sin afectarla al arreglo original dependiendo de los parámetros que mandemos es el resultado que vamos a obtener. Este método es bastante útil cuando queremos extraer elementos del arreglo de posiciones específicas

En los siguientes métodos si no encuentra algo regresa un -1
-toString: en donde trata de convertir el arreglo a su representación en string
-indexOf regresa el primer índex que coincida con la busqueda 
-lastIndexOf: regresa el último index que coincida con la búsqueda y si hay dos valores que coinciden, regresan el último valor

-includes: regresa True si encuentra el valor que se le puso a buscar, de lo contrario False 


Principios SOLID:
-Primcipio de responsabilidad unica (SRP) nombrar a mis funciones de forma muy especifica O sea cada que asignamos una clase,  objeto, etc. debe ser unica.
-Principios de Abierto y cerrado (OCP): Se refiere a que debemos extender el codigo ya ecistente de ser necesario. (Abierto a la extencion y que un mismo objeto y escale pero no se modifica el codigo, cerrado a reescribir)
-Principio de sustitucion de Liskov: Se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado al comportamiento del mismo (ejemplo de arroz con leche pertenecen a la misma clase pero ya no quiere hacer arroz con leche cosa que la mama y la abuela si lo hicieron)
-Principio de segregacion de interfaces (ISP): se refiere a las distintas interfaces
-Principio de investigacion de dependencias (DIP): Trabaja a traves de la abstracción para que el codigo no dependa de detalles especificos 


--Objetos Javascript Object Notation (JSON):
Se manejan a travez de clave- valor y no tienen métodos (bolsitas de datos)


*/


class ch47 {//Clase principal o clase padre
    //aqui se crea el contrusctor
    constructor(nombre, apellido, correo, edad) { //Nos permite crear mi clase
        this.name = nombre;//Atributos de mi objeto (this nos permite seleccionar el objeto que voy a crear)
        this.lastName = apellido;
        this.email = correo;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es: ${this.email} y mi edad es ${this.age}`
    }
    //Aquí va el método y siempre va dentro de mi clase SI ESTA AFUERA NO LO HACE
    infoIntegrantes() {
        console.log(this.info);
    }
}

class instruccion extends ch47 { //Extends es para heredar  //Esto es clase 
    //Ahora va el constructor
    constructor(nombre, apellido, correo, edad, escolaridad) {
        super(nombre, apellido, correo, edad); //super es para saber los atributos que se heredan de la clase anterior
        this.grado = escolaridad;
    }
    static darSesion() {
        console.log("hoy no tines sesion");
    }
}
class mentoria extends ch47 {
    constructor(nombre, apellido, correo, edad, telefono) {
        super(nombre, apellido, correo, edad);
        this.tel = new telefono;
    }
    static darMentoria() {
        console.log("tienes muchos mentees");
    }
}
class participantes extends ch47 {
    constructor(nombre, apellido, correo, edad, escolaridad, telefono, asistencia) {
        super(nombre, apellido, correo, edad);
        this.grado = escolaridad;
        this.tel = new telefono;
        this.attendance = new asistencia;
    }
    static asistencia() {
        console.log("Llegaste a tiempo");
    }
}

//para crear objetos se debe definir con const SIEMPRE y new 
const inte1 = new ch47("Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27);
const inte2 = new instruccion("Liliana", "Aguirre", "lili@gmail.com", 30, "licenciatura");
const inte3 = new mentoria("Yare", "Aguirre", "yare@gmail.com", 30, 5588996622, "licenciatura")
const inte4 = new participantes("Mayte", "Castañeda", "mayte@gmail.com", 26, 1122334455,"licenciatura")


//inte1.infoIntegrantes();
inte2.infoIntegrantes(); // con esta opcion imprime lo mismo que la funcion de abajo pero no muestra la parte de licenciatura por herencia y polimorfismo
instruccion.darSesion(); //Aqui no fue inte2 porque el nombre de la clase 

mentoria.darMentoria();
participantes.asistencia();

//NECESITO SABER QUE ES FETCH POST Y QUE EN EL BODY ESTE UN JSON CON NUESTRO NOMBRE, UN STRING Y NOMBRE DEL EQUIPO 

fetch() //hacer la peticion //get es recuperar los datos sin guardar  


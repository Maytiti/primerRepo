//Habiamos comentado que el flujo (Secuencia que sucede como se escribe) de JavaScript es el proceso en el cual se van a interpretar las lineas de tu codigo, y es flujo se puede interrumpir, se puede pausar y se ejecuta en un solo hilo o en linea 

//consolor.log (1);
//consolor.log (2);
//consolor.log (3);

//const jsFlow = () =>{
//    consolo.log(4);
//}
//invocando
//jsFlow();  y nos imprime 1, 2, 3, 4


//const jsFlow = () =>{
//    consolo.log(4);
//}
//consolor.log (1);
//consolor.log (2);
//invocando
//jsFlow();
//consolor.log (3); y nos imprime 1,2,4,3

//If y else son ejecutables que modifican el flujo de control de JS
//Al crear dos posibles bloques de codigo ejecutable que en el lenguaje natural seria dos finales

Const mostrarMesnaje = (mensaje) =>{
    alert (mensaje);
}
const validarEdad = (edad) => {
    if (edad >=18){
        mostarMensaje("bbva te presta mil pesos");
    } else{
        mostrarMensaje("bbva necesita tener 18 años");
    }
}
validarEdad (25);


/*Javascript utiliza estructuras de control de flujo para hacer tu codigo eficiente y flexible
Estas estructuras son: 
1. Condicionales (if, else if, else, Switch (en base a casos));
2. Ciclos (for, while, do while): la maneja en la que controlan el flujo es por medio de iteraciones
3. Controles de salto (break): es capaz de modificar y romper los ciclos permitiendote salir del 
*/

//Switch son una seria de casos o de categoria predeterminados en las cuales necesitamos que nuestros bloques de codigo se ejecuten segun sea el caso a validar

const ValidarNoLaborable = (dia) =>{
    switch(dia){
        case "sabado":      //ccaso
          //  console.log("Dia no laborable");  //codigoa ejecutar //se puede quitar este o ponerlo pero son dos mismos casos iguales
          //  break;                   
        case "domingo":
            console.log("Dia no laborable");  //codigoa ejecutar
            break;    
        default:                                    //Si ninguno de estos casos se cumple | por defecto
            break; //se pueden utilizar en ciclos y parar el proceso de flujo de la aplicacion, si no ponemos un break podemos probocar una “caída” o “fall-through
    }
}

ValidarNoLaborable("sabado");

//Switch no hace validaciones condicionales para eso se hacen antes o despues  este no es comparativa solo busca la IGUALDAD DEL CASO


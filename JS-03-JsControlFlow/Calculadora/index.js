//Ligar una funcion al evento html
let resultado;

function onInputOneChange() { //Se liga al html 
    //"aqui inicia mi funcion on inputCahnge "
    let numero1 = parseFloat(document.getElementById("numero1").value); 
    // document es html DOM (document) el punto es lo que lo hace obejto a get element by id y Busca elemento por ID que viene del documento html   ligando input con el elemento      value es un imput  y este atributo especifica como elemento y su propiedad el valor que salga del imput (document.getElementById("numero1").value) sera un float

    let numero2 = parseFloat(document.getElementById("numero2").value); //del cocumento busca elemento con ID ("numero2") y extrae el valor 
    //Analogia de pan y agua y las hormigas

}


//Switch |if | else| for| loop es algo que altera el proceso/ flujo pero diferentes opciones dentro de 
function operacionMatematica(typeOperacion) {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    switch (typeOperacion) {
        case "suma":
           
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multi":
            resultado = numero1 * numero2;
            break;
        default:
            alert("syntax error");

    }
    //Devuelve e imprime resultado
    document.getElementById("result").innerHTML =`Resultado: ${resultado}` ;
    //InnerHTML (dentro de html)
    //strings simples se declaran  = ",'
    //strings literals  = `

}


//se cpone console.log para depurar y hacer pruebas o sea eliminar debug y ver que es lo que esta entrando y sobre todo saber lo que va  a salir e investigar errores   debug buscar el error a partir de ver que eventos entran y salen

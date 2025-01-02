//los datos se guardan con los cookis y cache, JS no guarda nada solo las bases de datos y el storage en los navegadores. JS trabaja en milisegundos, el ciclo va: 1. INICIO  2. Ejecucion 3. Termina 
//las funciones que se tienen que ejecutar  el listener es el que cambia la respuesta (en donde JS ya paso el ciclo, y para pasar al sig pagina, tiene que haber info guardada y el network dice que todo funciona bien con un: OK foto de network (que es la tecnologia de acceso y que nos ayuda a navegar con el sistema) y para esto se hace el uso de memoria en todos los navegadores que es Local Storage --> Almacenamiento local y es chiquito el orden es herramientas de desarrollo > ventana de aplicación > storage  local storage funciona similar a los JSON (trabaja con dos elementos-> CLAVE Y VALOR))  todo lo de local storage se guarda hasta que se quite manualmente con remove item ("nombre de mi "pokemon" ")



const url = "https://pokeapi.co/api/v2/pokemon/ditto";
console.log("antes del fetch");
fetch(url, { //Fetch Asincrono
    method: 'GET'
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);//data accede a los datos de la respuesta que solicitamos.
    localStorage.setItem("NombrePokemon", data.name);
}).catch((error) => {
    console.error("ups no se que paso");
});
console.log("Despues del fetch");
//se emplea aqui porque el flujo de JS ya paso 
function peleaPokemon() {
    const miPrimerPokemon = localStorage.getItem("NombrePokemon"); // SALE NULL PORQUE Cuando se llama a peleaPokemon() al final del script, la solicitud fetch aún no ha terminado, por lo que localStorage.setItem("nombrePokemon", data.name); no se ha ejecutado, por eso, localStorage.getItem("nombrePokemon") devuelve null porque aún no hay ningún valor almacenado.
    console.log("primerContrincante:" + miPrimerPokemon);
}
//pero entonces hay que ponerle timer a la función para que le de tiempo del fetch o como? porque como es asincrono la funcion de Java se sigue ejecutando y en lo que va y viene la funcion de pelea pokemos JS no para, y ya ejecuto la funcion y estaba esperando la respuesta, por lo que Le toma mas tiempo obtener la respuesta del fetch que el tiempo que tarda en ejecutar el programa y es por la asincronia y no por el remove item 
peleaPokemon();

//ASYNC/AWAIT
//funciones dummy o mock  son para pruebas es como si usaramos fetch y simula hacer un request y que regrese una promesa 
function dummyFetch() {
    return new Promise((resolve)=> {
        setTimeout(() => { //para que no nos den errores y que permita que pase el flujo y poner el tiempoo de regreso 
            //Esto es la simulacion del resultado del request y regrsa datos DOM
            resolve("datosDummys");
        },3000)
    })
}

    //Await solo se utiliza en funciones asincronas y espera la respuesta y lo maneja automatica   con el async funciona el await
//desde el uso de la palabra async, estas declarando quela funcion es asincrona y por lo tanto retorna una promesa
async function funcionAsync() { //dentro de una funcion asincrona, se utiliza un variable const para colocar un await (espera) y hacer una promesa y colocar la funcion fetch (funcion asincrona) y la respuesta de se gurda en la data 
    try{
        const data = await dummyFetch();//aqui "esperamos" a que la promesa se resulva 
    } catch{
        console.error("error de Dummy"+err) //si no se usa try..catch no se usa esto y no se pone try  y { }
    }
     //aqui "esperamos" a que la promesa se resulva 
    console.log(data); //se espera que nos imprima los datos dummy 

}
//funciones dummy o mock  son para pruebas es como si usaramos fetch y hacer un request 

//Y se invocal la funcion: 
funcionAsync();



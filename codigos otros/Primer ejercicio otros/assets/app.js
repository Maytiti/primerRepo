const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//falta . para referenciar  clase
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


//Faltaba especificar que es una fun-async
async function displayUser(username) {
    //se agrega try y al final catch   -?
 try{
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //se agrega package json
 const data = await response.json();
  console.log(data);
  //se corrige y se pone bakcsticks
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
 } //se agrga catch err para que sirva handle error
 catch(err){
    handleError(err)
 }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}
//se elimina de aqui el catch 
displayUser('stolinski');
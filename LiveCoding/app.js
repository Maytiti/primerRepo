const listaPalabras=['insecto','bootcamp','mangos', 'resptil', 'mosca', 'escritorio'];

function palabrasG(palabra, arreglo){
    return arreglo.filter(elemento => elemento.length>palabra);
}
const nuevalista=palabrasG()
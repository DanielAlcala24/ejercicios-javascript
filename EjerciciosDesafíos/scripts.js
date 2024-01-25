
//1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    console.log('Hola mundo');
    return;
}

saludo();




//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let nombre = prompt("Coloca tu nombre completo");

function recibirNombre(nombre) {
    console.log(`Hola ${nombre}`);
    return;
}

recibirNombre(nombre);




//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let numero = parseFloat(prompt('coloca un numero'));

function dobleDeNumero(numeroAElevar) {
    let numeroElevado = Math.pow(numeroAElevar, 2);
    console.log(`Elnúmero elevado al cuadrado de ${numeroAElevar} es ${numeroElevado}`);
    return;
}

dobleDeNumero(numero);




//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
let calif1 = parseFloat(prompt('Coloca la primera calificación'));
let calif2 = parseFloat(prompt('Coloca la segunda calificación'));
let calif3 = parseFloat(prompt('Coloca la tercera calificación'));

function promedio(a, b, c) {
    let totalPromedio = (a + b + c)/3;
    console.log(`el promedio de las calificaciones ${a}, ${b} y ${c} es: ${totalPromedio}`);
    return;
}

promedio(calif1, calif2, calif3);




//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numero1 = parseFloat(prompt('Coloca un numero'));
let numero2 = parseFloat(prompt('Coloca otro numero'));

function obtenerNumeroMayor(n1, n2) {
    if (n1 < n2){
        console.log(`el numero ${n1} es menor que ${n2}`);
    } else {
        console.log(`el numero ${n1} es mayor que ${n2}`);
    }
    return;
}

obtenerNumeroMayor(numero1, numero2);



//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

let numeroMulti = parseFloat(prompt('Coloca un numero'));

function multiplicarNumeroPorSi(numero) {
    resultado = numero * numero
    console.log(`multiplicar ${numero} por ${numero} dá ${resultado}`)
    return;
}

multiplicarNumeroPorSi(numeroMulti);
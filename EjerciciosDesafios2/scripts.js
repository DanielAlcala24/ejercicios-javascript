//funcion para asignar texto a un elemento
function asignarTextos(elemento, texto) {
    // obtener una referencia al elemento html especificado por el selector en el parametro elemento
    let elementoHTML = document.querySelector(elemento);
    // modifica la propiedad innertHTML ddel elemento obtenido y le asigna el valor del parametro texto
    elementoHTML.innerHTML = texto;
    return;
}

//asignando los textos a los elementos html
function textosHTML() {
    asignarTextos('h1', 'Calcular IMC');
    asignarTextos('#peso', 'Ingrese su peso (Kg)');
    asignarTextos('#altura', 'Ingrese su altura (m)');
    return;
}

//funcion para calcular IMC y mostrarlo en el parrafo con id= resultado
function IMC() {
    let pesoAsignado = parseFloat(document.getElementById('recoger_peso').value);
    let alturaAsignada = parseFloat(document.getElementById('recoger_altura').value);
    let imcTotal = pesoAsignado / Math.pow(alturaAsignada, 2);
    let imcConUnDecimal = imcTotal.toFixed(1);
    if (isNaN(imcTotal)) {
        asignarTextos('#resultado', 'porfavor coloca valores numérico');
    } else {
        asignarTextos('#resultado', `el imc es de ${imcConUnDecimal}`);
    }
    return;
}

//funcion habilitar o deshabilitar botón 
function habilitarBoton() {
    let peso = document.getElementById('recoger_peso').value;
    let altura = document.getElementById('recoger_altura').value;
    let botonCalcular = document.getElementById('calcularIMC');
    // 
    botonCalcular.disabled = (peso.trim() == "" || altura.trim() == "");
}


function reiniciarValores() {
    //eliminar valores en los inputs
    document.getElementById("recoger_peso").value = "";
    document.getElementById("recoger_altura").value = "";
    //eliminar texto de parrafo con id=resultado
    asignarTextos("#resultado", "");
}

textosHTML()





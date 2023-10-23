
//Funciones
function calcularTabla() {
//variables
    let numero = parseInt(document.getElementById('numeroIngresado').value);

//Condicionales
    if (!isNaN(numero)) {

        let tablaMultiplicar = document.getElementById('tablaMultiplicar');
        tablaMultiplicar.innerHTML = '';
//bucles
        for (let i = 1; i <= 12; i = i + 1) {
            let resultado = numero * i;

            let muestraResultado = document.createElement('li');
            muestraResultado.textContent = numero + ' x ' + i + ' = ' + resultado;
            tablaMultiplicar.appendChild(muestraResultado);
        }
        
    } else {
        alert('Por favor, ingrese un número válido.');
    }
}
function adicionar(valor) {
    document.getElementById('tela').value += valor;
}
function zerarTudo() {
    document.getElementById('tela').value = '';
}
function apagarUltimo() {
    var visor = document.getElementById('tela');
    visor.value = visor.value.slice(0, -1);
}
function calcular() {
//     try {
//         var visor = document.getElementById('tela')
//         visor.value = eval(visor.value);
// }   
//     catch (error) {
//         visor.value = 'error!'
//     }
// } 
try {
    var visor = document.getElementById('tela')
    visor.value = Function(`'use strict'; return (${visor.value})`)();
    }   catch (error) {
            visor.value = 'error!!'
    }
}
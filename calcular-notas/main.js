const nota1 = document.getElementById('n1');
const nota2 = document.getElementById('n2');
const nota3 = document.getElementById('n3');
const nota4 = document.getElementById('n4');

const botao = document.getElementById('botao');

const resultado = document.getElementById('resultado');

let somaDasNotas = 0;

function calcularMedia() {
    if(parseInt(nota1.value) > 10 || parseInt(nota2.value) > 10 || parseInt(nota3.value) > 10 || parseInt(nota4.value) > 10) {
        alert('Insira notas de 0 a 10');
    }
    else if (parseInt(nota1.value) < 0 || parseInt(nota2.value) < 0 || parseInt(nota3.value) < 0 || parseInt(nota4.value) < 0) {
        alert('Insira notas de 0 a 10');
    } 
    else {
        somaDasNotas = parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value) + parseInt(nota4.value);
        const media = somaDasNotas/4;
        resultado.innerHTML = ` Seu resultado foi: ${media}` 
    }
}

botao.onclick = calcularMedia;
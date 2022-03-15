const form = document.querySelector('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

const inputs = [nome, email, telefone, mensagem];


const mensagemEnviada = document.getElementById('mensagemEnviada');


let tentouEnviar = false;
let formularioValido = false;


const resetInput = (elemento) => {
    elemento.nextElementSibling.classList.add('esconder');
}

const invalidarInput = (elemento) => {
    elemento.nextElementSibling.classList.remove('esconder');
}


const validarForm = () => {
    if(!tentouEnviar) return;

    inputs.forEach(input => {
        resetInput(input);
    })

    if(!nome.value ) {
        invalidarInput(nome);
        formularioValido = false;
    }
    if(!email.value) {
        invalidarInput(email);
        formularioValido = false;
    }
    if(!telefone.value) {
        invalidarInput(telefone);
        formularioValido = false;
    }
    if(!mensagem.value) {
        invalidarInput(mensagem);
        formularioValido = false;
    }

    if(nome.value && email.value && telefone.value && mensagem.value) {
        formularioValido = true;
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    tentouEnviar = true;
    validarForm();
    
    if(formularioValido) {
        form.remove();
        mensagemEnviada.classList.remove('esconder');
    }
});


inputs.forEach(input => {
    input.addEventListener("input", () => {
        validarForm();
    });
});
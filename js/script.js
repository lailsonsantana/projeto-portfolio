import { Validators } from './validators.js';
import { initTheme } from './theme.js';
import { initCamera } from './camera.js';

initTheme();

initCamera();

const camposDoFormulario = document.querySelectorAll("[required]");

const camposValidacao = {
    name: (field) => Validators.isEmpty(field.value),
    country: (field) => Validators.isEmpty(field.value),
    message: (field) => Validators.isEmpty(field.value),
    email: (field) => Validators.validateEmail(field.value),
    cpf: (field) => Validators.validateCPF(field.value),
    date: (field) => Validators.validateOver18(field.value)
};

// forEach
camposDoFormulario.forEach(campo => {
    // addEventListener
    campo.addEventListener("blur", () => {

        const logicaDeValidacao = camposValidacao[campo.id](campo);
        
        // Parent node
        const elementoMensagem = campo.parentNode.querySelector(".mensagem-erro");

        if (!logicaDeValidacao.valid) {
            campo.classList.add("erro");
            elementoMensagem.textContent = logicaDeValidacao.message;
            //campo.setCustomValidity("Erro");
        } else {
            //campo.classList.remove("erro");
            elementoMensagem.textContent = "";
            //campo.setCustomValidity(""); 
        }
    });
});






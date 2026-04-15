import ehUmCPF from "./valida-cpf.js";

export const Validators = {
    isEmpty: (value) => ({
        valid: value.trim().length !== 0,
        message: "Este campo é obrigatório"
    }),
    
    validateEmail: (value) => {
        const emptyCheck = Validators.isEmpty(value);
        if (!emptyCheck.valid) return emptyCheck;

        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = reg.test(value);

        return {
            valid,
            message: valid ? "" : "Digite um email válido !"
        };
    },
    
    validateCPF: (cpf) => {
        const emptyCheck = Validators.isEmpty(cpf);
        if (!emptyCheck.valid) return emptyCheck;

        const valid = ehUmCPF(cpf);

        console.log(valid)

        return {
            valid,
            message: valid ? "" : "Digite um CPF válido"
        };
    },
    
    validateOver18: (date) => {
        const emptyCheck = Validators.isEmpty(date);
        if (!emptyCheck.valid) return emptyCheck;

        const birth = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();

        const valid = age >= 18;

        return {
            valid,
            message: valid ? "" : "Você deve ter pelo menos 18 anos"
        };
    }
};
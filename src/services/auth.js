import api from "./api";
const cadastro = (formData) => {
    return api().post("/usuarios", {
        nome: formData.name,
        email: formData.email,
        senha: formData.senha,
        cpf: formData.cpf,
        telefone: "31967354218",
        filiacao: {
            tipo: "Pública",
            organizacao: "VeronasEnterprise",
            cargo: "Gerente"
        }
    })
}

const SigIn = (email, password) => {
    return api().post('/login/externo',  {
        email: email,
        senha: password 
    })
};

export {SigIn, cadastro};
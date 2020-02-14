import api from "./api";
const cadastro = (formData) => {
    return api().post("/registerDoctor", {
        headers: {
              'Access-Control-Allow-Origin': true,
            },
            fk_id_care_unit: "1",
            name: formData.name,
            email: formData.email,
            password: formData.senha
        })
}

const SigIn = (email, password) => {
    return api().post('/login/externo',  {
        email: email,
        senha: password 
    })
};

export {SigIn, cadastro};
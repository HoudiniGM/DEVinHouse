class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}

const usuario = new Usuario('Joao', 'joaovittormtm@gmail.com', '12345678')

function acessar(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (usuario.autenticar(email, senha)){
        alert('Logado com sucesso')
    } else {
        alert('Credenciais inválidas')
    }
    
}

document.getElementById('acessar').addEventListener('click', acessar)
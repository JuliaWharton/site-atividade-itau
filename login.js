const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');

const submeter = document.querySelector(".botao")
const fazerLogin = function () {
    let payload = {
        email: inputEmail.value,
        senha: inputSenha.value
    }
    
    const tratarDados = function (dados) {
        return dados.json();
    }
    
    const pegarNomes = function (dados) {
        console.log(dados);
    }
    
    fetch('http://10.162.111.140:8080/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(tratarDados).then(pegarNomes);
}

submeter.onclick = fazerLogin;


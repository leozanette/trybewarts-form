const buttonEntrar = document.getElementById('buttonEntrar');

buttonEntrar.addEventListener('click', alertaLogin);

function alertaLogin() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        alert("Olá, Tryber!");
    } else {
        alert("Email ou senha inválidos.");
    }
}




const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true;


function habilitaEnviar() {

    checkbox.addEventListener('change', checked);
}
habilitaEnviar();

function checked() {
    if (checkbox.checked === true) {
        buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}


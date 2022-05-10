const buttonEntrar = document.getElementById('buttonEntrar');

function alertaLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', alertaLogin);

const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true;

function checked() {
  if (checkbox.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

function habilitaEnviar() {
  checkbox.addEventListener('change', checked);
}
habilitaEnviar();

function contaText() {
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', () => {
    const contagem = textarea.value.length;
    const span = document.getElementById('counter');
    span.innerHTML = 500 - contagem;
  });
}

contaText();

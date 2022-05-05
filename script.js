let buttonEntrar = document.getElementById('buttonEntrar');

buttonEntrar.addEventListener('click', function () {
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    if (email.value == 'tryber@teste.com' && senha.value == '123456') {
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }
})
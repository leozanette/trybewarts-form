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

let checkbox = document.getElementById('agreement');
let buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true

function habilitaEnviar() {
    
    checkbox.addEventListener('change', checked)


}
habilitaEnviar()

function checked() {
    if(checkbox.checked == true) {
        buttonEnviar.disabled = false
    } else {
        buttonEnviar.disabled = true
    }

    console.log(checkbox.checked)
    console.log(checkbox.value)
}
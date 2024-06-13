
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function(){

    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    signUpButton.addEventListener('click', handleSignUp);
    signInButton.addEventListener('click', handleSignIn);

    function handleSignUp() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && validatePassword(password)) {
            // Lógica de registro
            alert('Registro exitoso');
        } else {
            alert('Por favor, ingrese un correo electrónico válido y una contraseña de al menos 8 caracteres.');
        }
    }

    function handleSignIn() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && validatePassword(password)) {
            // Lógica de inicio de sesión
            alert('Inicio de sesión exitoso');
        } else {
            alert('Por favor, ingrese un correo electrónico válido y una contraseña de al menos 8 caracteres.');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8 && password.length <= 15;
    }
});
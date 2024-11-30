'use strict';

let user = "user";
let contraseña = "1234";

function iniciarSesion(event) {
    event.preventDefault(); 
    
    const inputUsuario = document.getElementById("usuario").value;
    const inputContraseña = document.getElementById("contraseña").value;

    if (inputUsuario === user && inputContraseña === contraseña) {
        window.location.href = "aprender.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const Seleecionar_lenguaje = document.querySelector('#idioma');
    const texts = {
        es: {
            pageTitle: "Sphelearn",
            pageLabel: "Idioma de la página:",
            username: "Usuario",
            password: "Contraseña",
            placeholderUser: "Ingresa tu usuario",
            placeholderPassword: "Ingresa tu contraseña",
            loginButton: "Iniciar Sesión"
        },
        en: {
            pageTitle: "Sphelearn",
            pageLabel: "Select language:",
            username: "Username",
            password: "Password",
            placeholderUser: "Enter your username",
            placeholderPassword: "Enter your password",
            loginButton: "Log In"
        }
    };

    function Actualizar_lenguaje(lang) {
        document.title = texts[lang].pageTitle;
        document.querySelector('label[for="idioma"]').textContent = texts[lang].pageLabel;
        document.querySelector('label[for="usuario"]').textContent = texts[lang].username;
        document.querySelector('label[for="contraseña"]').textContent = texts[lang].password;
        document.querySelector('#usuario').placeholder = texts[lang].placeholderUser;
        document.querySelector('#contraseña').placeholder = texts[lang].placeholderPassword;
        document.querySelector('button[type="submit"]').textContent = texts[lang].loginButton;
    }

    Seleecionar_lenguaje.addEventListener('change', (e) => {
        const Seleccionar_valor = e.target.value;
        Actualizar_lenguaje(Seleccionar_valor);
    });

    updateLanguage("es");
});










'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const Seleecionar_lenguaje = document.querySelector('select');
    const texts = {
        es: {
            title: "Bienvenidos",
            welcome: "Bienvenidos a",
            register: "Registrarse",
            login: "Inicia sesión",
            Lenguaje: "Seleccione el idioma de la página"
        },
        en: {
            title: "Welcome",
            welcome: "Welcome to",
            register: "Register",
            login: "Log in",
            Lenguaje: "Select the page language"
        }
    };

    function Actualizar_lenguaje(lang) {
        document.title = texts[lang].title;
        document.querySelector('h3').textContent = texts[lang].Lenguaje;
        document.querySelector('.cuadro1 h1').textContent = texts[lang].welcome;
        document.querySelector('.contenedor-cuadros p').textContent = "SPHELEARN";
        document.querySelectorAll('.boton')[0].textContent = texts[lang].register;
        document.querySelectorAll('.boton')[1].textContent = texts[lang].login;
    }

    Seleecionar_lenguaje.addEventListener('change', (e) => {
        const Seleccionar_valor = e.target.value;
        Actualizar_lenguaje(Seleccionar_valor === "opcion2" ? "en" : "es");
    });

    updateLanguage("es");
});
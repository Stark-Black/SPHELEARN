// Leer configuración desde localStorage
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);

    // Actualizar el estado de los checkboxes
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const highContrastToggle = document.querySelector('#highContrastToggle');

    if (darkModeToggle) {
        darkModeToggle.checked = theme === "dark";
    }
    if (highContrastToggle) {
        highContrastToggle.checked = theme === "high-contrast";
    }
});

// Alternar temas
function toggleTheme(event, theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

// Escuchar cambios en los checkboxes
document.addEventListener("change", (event) => {
    if (event.target.matches('#darkModeToggle') && event.target.checked) {
        toggleTheme(event, "dark");
    } else if (event.target.matches('#highContrastToggle') && event.target.checked) {
        toggleTheme(event, "high-contrast");
    } else if (!event.target.checked) {
        toggleTheme(event, "light");
    }
});

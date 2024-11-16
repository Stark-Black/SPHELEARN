// Obtener el video y la barra de progreso
const video = document.getElementById('video');
const progressBar = document.getElementById('progress-bar');

// Función para actualizar la barra de progreso
function updateProgressBar() {
    const progressPercentage = (video.currentTime / video.duration) * 100; // Calcular el porcentaje de avance
    progressBar.style.width = progressPercentage + '%'; // Actualizar el ancho de la barra

    // Cambiar el color de la barra cuando pasa del 50%
    if (progressPercentage >= 50) {
        progressBar.style.backgroundColor = 'green';
    } else {
        progressBar.style.backgroundColor = 'rgba(124, 192, 197, 1)';
    }
}

// Escuchar el evento 'timeupdate' para actualizar la barra de progreso mientras se reproduce
video.addEventListener('timeupdate', updateProgressBar);

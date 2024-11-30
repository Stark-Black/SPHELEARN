document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos de las palabras a arrastrar y de destino
    const draggableWords = Array.from(document.querySelectorAll(".left .word"));
    const targetWords = Array.from(document.querySelectorAll(".right .word"));
    
    // Definir el contador de respuestas correctas
    let correctAnswers = 0;
    const totalAnswers = draggableWords.length; // Total de respuestas correctas posibles (en este caso, 4)
  
    // Función para desordenar los elementos
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
      }
    }
  
    // Desordenar las palabras de la izquierda y derecha
    shuffle(draggableWords);
    shuffle(targetWords);
  
    // Volver a añadir las palabras desordenadas al contenedor de la izquierda y derecha
    const leftContainer = document.querySelector(".left");
    const rightContainer = document.querySelector(".right");
  
    // Limpiar los contenedores antes de agregar las palabras desordenadas
    leftContainer.innerHTML = "";
    rightContainer.innerHTML = "";
  
    // Añadir las palabras desordenadas al contenedor
    draggableWords.forEach(word => leftContainer.appendChild(word));
    targetWords.forEach(target => rightContainer.appendChild(target));
  
    // Hacer que las palabras sean arrastrables
    draggableWords.forEach(word => {
      word.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.dataset.match);
      });
    });
  
    // Hacer que las palabras de destino acepten las que son soltadas
    targetWords.forEach(target => {
      target.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
  
      target.addEventListener("drop", (e) => {
        const match = e.dataTransfer.getData("text");
        const accept = e.target.dataset.accept;
  
        if (match === accept && !e.target.classList.contains("correct")) {
          e.target.classList.add("correct");
          e.target.textContent = "✓ " + e.target.textContent;
          // Desactivar la palabra arrastrable ya asociada
          document.querySelector(`[data-match="${match}"]`).setAttribute("draggable", "false");
          e.target.setAttribute("draggable", "false");
  
          // Aumentar el contador de respuestas correctas
          correctAnswers++;
  
          // Actualizar la barra de progreso
          updateProgressBar();
        } else if (!e.target.classList.contains("correct")) {
          e.target.classList.add("incorrect");
        }
      });
    });
  
    // Función para actualizar la barra de progreso
    function updateProgressBar() {
      const progressBar = document.querySelector(".progress");
      const progressPercentage = (correctAnswers / totalAnswers) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  
      // Si el progreso alcanza el 100%, podemos dar un mensaje o acción adicional si lo deseas
      if (correctAnswers === totalAnswers) {
        setTimeout(() => alert("¡Felicidades!"), 500);
      }
    }
  });
  
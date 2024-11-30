document.querySelectorAll('.imagen-unidad1_1, .imagen-unidad1_2').forEach(function(img) {
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
  
    img.addEventListener('mouseover', function() {
      tooltip.textContent = img.title; // Obtiene el texto del atributo title
      tooltip.style.display = 'block'; // Muestra el tooltip
  
      // Posicionar el tooltip sobre la imagen
      var rect = img.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px'; // Ajusta la posición
    });
  
    img.addEventListener('mouseout', function() {
      tooltip.style.display = 'none'; // Oculta el tooltip
    });
  });
  
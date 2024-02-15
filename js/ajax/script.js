document.addEventListener('DOMContentLoaded', function () {
  fetchSlideContent(1); // Inicializa con el contenido del slide "RESTAURANT"
});

function fetchSlideContent(slideNumber) {
  // Supongamos que tienes un endpoint que devuelve el contenido de la diapositiva basado en el número de la diapositiva
  var url = `/getSlideContent?slideNumber=${slideNumber}`;

  // Realiza la solicitud AJAX utilizando fetch
  fetch(url)
    .then(response => {
      // Asegúrate de que la respuesta es correcta antes de proceder
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parsea la respuesta como texto si estás esperando HTML o como json() si esperas JSON
      return response.text();
    })
    .then(html => {
      // Inserta el contenido de la diapositiva en el DOM
      document.getElementById(`slide${slideNumber}`).innerHTML = html;
      // Llama a la función currentSlide para actualizar la posición de las diapositivas
      currentSlide(slideNumber);
    })
    .catch(error => {
      console.error('Hay un problema con la operacion:', error);
    });
}

// La función currentSlide sigue siendo la misma que proporcionaste
function currentSlide(slideNumber) {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${(i - slideNumber + 1) * 100}%)`;
  }
}

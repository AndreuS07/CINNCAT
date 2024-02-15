$(function() {
  var allPanels = $('#accordion > div').hide(); // Esconde todo el contenido inicialmente
  
  $('#accordion > h3').click(function() {
    var targetPanel = $(this).next();
    if (!targetPanel.is(':visible')) {
      allPanels.slideUp(); // Esconde todos los paneles
      targetPanel.slideDown(); // Muestra el panel correspondiente al encabezado clickeado
    }
    return false;
  });
});
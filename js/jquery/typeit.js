$(document).ready(function() {

    new TypeIt('#textContainer', {
        afterComplete: function(instance) {

            $('#textContainer').addClass('no-cursor');

            $('#txt2').css('display', 'block');

            new TypeIt('#txt2', {
                speed: 20, 
                afterComplete: function(instance) {

                    $('#backToMainButton').fadeIn(500);
                }
            }).go();
        }
    }).go();
});

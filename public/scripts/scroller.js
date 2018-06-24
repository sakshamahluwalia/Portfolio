$(document).ready(function() {
    $('.abtn').click(function(){
        $('html, body').animate({scrollTop:$('#aboutme').position().top}, 'slow');
        return false;
    });
    $('.pbtn').click(function(){
        $('html, body').animate({scrollTop:$('#projects').position().top}, 'slow');
        return false;
    });
});
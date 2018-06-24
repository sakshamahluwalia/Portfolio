$(document).ready(function() {
    $('.abtn').click(function(){
        $('html, body').animate({scrollTop:$('#aboutme').position().top}, 'slow');
        return false;
    });
    $('.pbtn').click(function(){
        $('html, body').animate({scrollTop:$('#projects').position().top}, 'slow');
        return false;
    });
    $('.topbtn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
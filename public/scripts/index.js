var timeout;
var count = 0;
var header = document.querySelector("h1");
var hr = document.querySelector("hr");
var image = document.querySelectorAll(".links");
var git = document.querySelectorAll(".git");
var resume = document.querySelector(".resume");
var atag = document.querySelector(".linkedin");
var topContainer = document.querySelector("#header");

for (var i=0;i < image.length; i++) {
    image[i].addEventListener("click", function() {
    document.body.style.backgroundImage = "url("+this.children[0].children[0].src+")";
    check(this.children[0].children[0].src);
    });
};

document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    if (count < 1) {
        animate();   
    } else {}
  }, 1000);
}

function animate() {
    count ++;
    $("span").removeClass("blind");
    $("span").addClass("animated flash");
    setTimeout(function() { reset(); }, 1000);
}

function reset() {
    $("span").addClass("blind");
    $("span").removeClass("animated flash");
};

function check(image) {
    for(var i=0;i<git.length;i++) {
        if (image == "https://s-media-cache-ak0.pinimg.com/originals/36/93/a5/3693a5a8836ad1c0891ee65d5b63907d.png") {
            git[i].classList.remove("blind");
            resume.classList.add("blind");
            header.textContent = "Side Projects";
            atag.classList.add("blind");
            header.style.color = "white";
            hr.style.borderTopColor = "white";
            hr.classList.remove('special');
        } else if (image == "http://careeredge.on.ca/wp-content/uploads/2014/05/Resume.jpg") {
            header.textContent = "Resume";
            resume.classList.remove("blind");
            git[i].classList.add("blind");
            atag.classList.add("blind");
            header.style.color = "black";
            hr.style.borderTopColor = "black";
            hr.classList.add('special');
            topContainer.style.marginBottom = -40;
        } else if (image == "http://www.aurameir.com/wp-content/uploads/2016/08/linkedim-2.jpg") {
            header.textContent = "SAKSHAM AHLUWALIA";
            resume.classList.add("blind");
            git[i].classList.add("blind");
            atag.classList.remove("blind");
            if (topContainer.style.marginBottom = -40) {
                atag.style.marginTop = 70;   
            } else {}
            header.style.color = "white";
            hr.style.borderTopColor = "white";
            hr.classList.remove('special');
        } else {
            git[i].classList.add("blind");
            resume.classList.add("blind");
            atag.classList.add("blind");
            header.style.color = "white";
            hr.style.borderTopColor = "white";
            hr.classList.remove('special');
        }
    };
};
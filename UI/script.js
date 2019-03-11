document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

document.querySelector('.modal-overlay').addEventListener('click', function() {
    this.classList.toggle('active');
});

var postClass = document.getElementsByClassName("post-overlay");

for(var i = 0; i < postClass.length; ++i) {
    postClass[i].addEventListener('click', function () {
        document.querySelector('.modal-overlay').classList.toggle('active');
    });
}

window.onscroll = function () {
    var logo = document.querySelector('img.logo');
    var controls = document.querySelector('.controls');
    if (window.pageYOffset > 0) {
        logo.style.content = "url(icons/logo-mobile.svg)";
        controls.style.bottom = "15px";
        console.log(window.scrollY + window.innerHeight);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            controls.style.bottom = (window.innerHeight + window.scrollY - document.body.offsetHeight) + "px";
        }
    } else {
        logo.style.content = "url(icons/logo.svg)";
    }
}
document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

document.querySelector('.modal-overlay').addEventListener('click', function() {
    document.querySelector('body').classList.toggle("no-scroll");
    this.classList.toggle('active');
});

window.onscroll = function () {
    var controls = document.querySelector('.controls');
    if (window.pageYOffset > 0) {
        controls.style.bottom = "15px";
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            controls.style.bottom = (window.innerHeight + window.scrollY - document.body.offsetHeight) + "px";
        }
    }
}
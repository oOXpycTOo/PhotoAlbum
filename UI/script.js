document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

window.onscroll = function () {
    let controls = document.querySelector('.controls');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        controls.style.bottom = (window.innerHeight + window.scrollY - document.body.offsetHeight) + "px";
    }
}
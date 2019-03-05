function resizeText() {
    var elements  = document.getElementsByClassName('overlay-icons');
    if (elements.length < 0) {
        return;
    }
    for (var i = 0; i < elements.length; ++i) {
        var el = elements[i];
        console.log(el.scrollHeight);
        el.style.fontSize = el.scrollHeight * 0.8 + "px";
    }
}

document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});
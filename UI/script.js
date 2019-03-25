(function() {
    document.querySelector('.menu-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
    });

    window.onscroll = function(ev) {
        var html = document.documentElement;
        var height = html.scrollHeight;
        if ((window.innerHeight + window.scrollY) >= height - 64) {
        document.querySelector('.controls').style.bottom = (window.innerHeight + window.scrollY) - height + 64 + 15 + 'px'; 
        } else {
        document.querySelector('.controls').style.bottom = 15 + 'px'; 
        }
    };
})();
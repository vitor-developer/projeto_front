let i = 0;
let images = document.querySelectorAll('.carousel img');

function changeImage() {
    images[i].style.display = 'none';
    i = (i + 1) % images.length;
    images[i].style.display = 'block';
}

setInterval(changeImage, 10000); // Troca a imagem a cada 10 segundos

// Alteração no JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var menuHorizontal = document.getElementById('menu-horizontal');
    var menuVertical = document.getElementById('menu-vertical');

    menuHorizontal.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.parentNode.classList.contains('menu-option')) {
            var position = event.target.getBoundingClientRect();
            menuVertical.style.display = 'block';
            menuVertical.style.left = position.left + 'px';
            menuVertical.style.top = position.top + position.height + 'px';
        } else {
            menuVertical.style.display = 'none';
        }
    });

    menuVertical.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            menuVertical.style.display = 'none';
        }
    });
});

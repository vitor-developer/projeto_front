let i = 0;
let images = document.querySelectorAll('.carousel img');

function changeImage() {
    images[i].style.display = 'none';
    i = (i + 1) % images.length;
    images[i].style.display = 'block';
}

setInterval(changeImage, 5000); 

document.addEventListener('DOMContentLoaded', function() {
    var menuHorizontal = document.getElementById('navegacao');
    var menuVertical = document.getElementById('menu-vertical');

    menuHorizontal.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.parentNode.classList.contains('menu-option')) {
            var position = event.target.getBoundingClientRect();
            // Toggle visibility of the vertical menu
            menuVertical.style.display = menuVertical.style.display === 'block' ? 'none' : 'block';
            // Adjust position only if the menu is displayed
            if (menuVertical.style.display === 'block') {
                menuVertical.style.left = position.left + 'px';
                menuVertical.style.top = position.top + position.height + 'px';
            }
        } else {
            // Hide the vertical menu
            menuVertical.style.display = 'none';
        }
    });

    menuVertical.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            // Hide the vertical menu when a link is clicked
            menuVertical.style.display = 'none';
        }
    });
});

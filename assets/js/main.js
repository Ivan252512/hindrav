// loader
window.onload = () => {
    let container = document.getElementById('loadcontainer');

    container.style.visibility = 'hidden';
    container.style.opacity = '0';
}

// Navbar
// Toggle Menu Navbar
function toggMenu() {
    let x = document.getElementById('showUp');
    let burger = document.getElementById('burger');
    let navButton = false;
    let isActive;
    if (x.style.display === 'block') {
        isActive = true;
        if (isActive === true) {
            x.style.animation = 'offNav 0.4s ease-in-out';
            if (navButton === false) {
                burger.classList.remove('rotateActive');
            }
        }
        setTimeout(() => {
            x.style.display = "none";
        }, 400);
    } else {
        x.style.display = 'block';
        x.style.animation = 'onNav 0.4s ease-in-out';
        navButton = true;
        if (navButton === true) {
            burger.classList.add('rotateActive');
        }
    }
}
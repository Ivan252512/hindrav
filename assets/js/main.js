// Typed js
const typed = new Typed('.typed', {
    typeSpeed: 40, //Velocidad en milisegundos para poner una letra
    backSpeed: 40, // Velocidad en milisegundos para borrar una letra.
    startDelay: 300, //Tiempo de retraso en iniciar la animación. Aplica también para volver a iniciar.
    smartBackspace: false,
    stringsElement: '.typed--container',
    shuffle: false, // Alterar el órden en el que escribe las palabras.
    backDelay: 1700, // Tiempo de espera después de que termina de escribir una palabra
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array
    showCursor: true, //Mostrar el cursor palpitante
    cursorChat: '|', // Caracter para el cursor
    contentType: 'html' // 'html' o 'null' para texto sin formato
});
// Particles js
particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 70,
                "density":{
                    "enable": true,
                    "value_area": 1000
                }
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 500,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 12,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

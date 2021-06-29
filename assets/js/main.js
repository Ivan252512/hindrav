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
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 400
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": true,
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
            "speed": 100,
            "size_min": 0.1,
            "sync": true
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#ffffff",
          "opacity": 0.5,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 2,
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
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 130,
            "line_linked": {
              "opacity": 0.4
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
            "distance": 300,
            "duration": 0.3
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
});

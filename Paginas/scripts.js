// Detectar cuando el usuario comienza a desplazarse
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', function() {
    // Cuando el usuario se desplaza, muestra la barra de desplazamiento
    clearTimeout(scrollTimeout);
    document.body.classList.add('scrollbar-visible');
    
    // Después de 1 segundo de no desplazarse, ocultar la barra
    scrollTimeout = setTimeout(function() {
        document.body.classList.remove('scrollbar-visible');
    }, 1000);  // 1000 ms de espera después de que el usuario deje de desplazarse
});

// Detectar cuando el usuario mueve el cursor
let lastMouseMove = Date.now();
let mouseMoveTimeout;

window.addEventListener('mousemove', function() {
    // Muestra la barra de desplazamiento cuando el cursor se mueve
    document.body.classList.add('scrollbar-visible');
    clearTimeout(mouseMoveTimeout);

    // Después de 2 segundos sin mover el mouse, ocultar la barra
    mouseMoveTimeout = setTimeout(function() {
        document.body.classList.remove('scrollbar-visible');
    }, 2000);  // 2000 ms de espera después de que el cursor deje de moverse
});

// Inicialmente, asegurarse de que la barra de desplazamiento esté visible si el usuario ya está desplazado
if (document.documentElement.scrollTop > 0) {
    document.body.classList.add('scrollbar-visible');
}

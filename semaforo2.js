const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 0;

const mostrarLuz = () => {
    $lucesDelCirculo.forEach(luz => {
        luz.classList.remove('encendida');
    });

    $lucesDelCirculo[contadorDeLuz].classList.add('encendida');
    $lucesDelCirculo[contadorDeLuz].classList.add($lucesDelCirculo[contadorDeLuz].getAttribute('color'));

    contadorDeLuz++;

    if (contadorDeLuz > 2) contadorDeLuz = 0;
}

setInterval(mostrarLuz, 2000);
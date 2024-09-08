function actualizarReloj() {
    const hora = new Date();
    const horas = hora.getHours();
    const minutos = hora.getMinutes();
    const segundos = hora.getSeconds();

    const horaActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = horaActual;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
function horarioAtual(){
    const horario = new Date;
    const horas = horario.getHours();
    const minutos = horario.getMinutes();
    const segundos = horario.getSeconds();
    console.log(`${horas}:${minutos}:${('00' + segundos).slice(-2)}`)
}

setInterval( horarioAtual, 2000 )
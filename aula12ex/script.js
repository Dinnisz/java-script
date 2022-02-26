function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas  ${minuto} minutos e ${segundo} segundos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'pexels-simon-berger-1266810.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'pexels-anderson-martins-2386144.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        img.src = 'pexels-pixabay-414144.jpg'
        document.body.style.background = '#515154'
    }



}

setInterval(carregar, 1000);
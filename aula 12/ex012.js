var agora = new Date()
var hora = agora.getHours()
if ((hora >= 19 && hora <= 24) || (hora <= 0)) {
    console.log('Boa noite são ' + hora + ' em ponto')
} else if (hora >= 1 && hora <= 12) {

    console.log('Bom Dia são ' + hora + ' em ponto')

} else {
    console.log('Boa Tarde são ' + hora + ' em ponto')
}
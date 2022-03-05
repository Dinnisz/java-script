function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR]  Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }


        res.innerHTML = `Dectetamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || (fano.value) > ano) { //informando as condiçoes quando informar o ano de nascimento
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criando uma variavel para selecionar a foto
        img.setAttribute('id', 'foto') //selecionando a variavel de foto
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        } else if (fsex[1].checked) { //fazendo a verificação do rad
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center' //centraizando o resultado
        res.innerText = `Detectamos ${gênero} com ${idade} anos.` //listando as informaçoes coçetadas
        res.appendChild(img)
    
    }
}
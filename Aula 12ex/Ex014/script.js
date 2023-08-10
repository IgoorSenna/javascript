function carregar () {
    var msg = window.document.getElementById('msg') //selecionando elemento pelo id
    var img = window.document.getElementById('imagem')
    var data = new Date() //vai selcionar uma nova data
    var hora = data.getHours() //vai selecionar hora atual
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#f8f1d4'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#f6af54'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#2e2742'
    }
}

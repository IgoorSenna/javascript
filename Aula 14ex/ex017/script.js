function contar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0 ){
        window.alert('ERRO. VARIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        //CALCULADORA
        for (c = 1;c <= 10; c++) {
            let item = document.createElement('option') //CRIANDO UM ELEMENTO ATRAVEZ DO JAVA
            item.text = `${n} x ${c} = ${n*c}` // FAZENDO O CALCULO DA CALCULADORA
            tab.appendChild(item)
        }
    }
}

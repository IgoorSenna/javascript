res.innerText('TA INDO')
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let con = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || con.value.length == 0) {
        window.alert ('[Erro] Verifique as informções e tente novamente')
        r.innerHTML += ''
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(con.value)
        let r = res
        if (p <= 0){
            window.alert('Passo invalido. CONSIDERANDO VALOR 1')
            p = 1
        }

        if (i < f) {
            //CRESCENTE
            for (t = i; t <= f; t += p) {
                r.innerHTML += `\u{1F449}${t}`
            }
        } else {
            //DECRESCENTE
            for (t=i; t >= f; t -= p){
                r.innerHTML += `\u{1F449}${t}`
            }
        }
    }
    res.innerHTML += '\u{1F449}\u{1F3F4}'
}
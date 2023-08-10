function parimpar (n) { // definindo a funçao
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Impar'
    }
}

let res = parimpar(4) // chamando a funcao com uma variavel
console.log(res)

console.log(parimpar(223)) //chamando a funcao sem ter uma variavel
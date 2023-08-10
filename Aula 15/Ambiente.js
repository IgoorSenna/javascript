let num = [5, 8, 2, 9, 3] //Variavel composta
num[5] = 6 //Acrescentando valor depois de definido a variavel em um valor que nao existe
num.push(1) //Vai colocar 1 no final

num.sort() //colocar em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`) // contar a quantidade de valores
console.log(`O prmeiro valor do vetor é ${num[0]}`) // mostrar um valor especifico


let pos = num.indexOf(7)
console.log(`O valor 8 esta na posiçao ${pos}`) //vai mostrar a posiçao onde esta o valor

if (pos == -1) { //tarando dados procurando valor na string
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O valor esta na posiçao ${pos}`)
}
var agora = new Date
//var hora = agora.getHours()
var hora = 5
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 || hora < 23) {
    console.log('Boa Noite!')
} else if (hora > 23 || hora < 6) {
    console.log('Boa Madrugada!')
}
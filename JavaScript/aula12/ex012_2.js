var agora = new Date() // função Date - contém Data e Hora
var hora = agora.getHours() // retorna a hora atual do sistema
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12 && hora >= 6)  {
    console.log('bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('boa tarde!')
} else if (hora > 18 && hora <= 24) {
    console.log('boa noite!')
} else {
    console.log('boa madrugada')
}
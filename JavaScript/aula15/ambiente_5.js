let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)

let posicao = num.indexOf(8)
console.log(posicao)

let vetor = [ 2, 3, 5, 8, 9, 1 ]

let buscaIndex = vetor.indexOf(10)
if (buscaIndex == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${buscaIndex}`)
}

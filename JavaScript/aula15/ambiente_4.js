let valores = [8, 1, 7, 4, 2, 9]

for(let i=0; i<valores.length; i++) {
    console.log(valores[i])
}

for(let index = 0; index < valores.length; index++) {
    console.log(`A posição ${index} tem o valor ${valores[index]}.`)
}

let vetor = [8, 1, 7, 4, 2, 9]

for (let index in vetor) {
    console.log(vetor[index])   
}

for (let index in vetor) {
    console.log(`A posição ${index} tem o valor ${vetor[index]}`)   
}
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`) 
/* José pesa 85.4 Kg. */

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`) 
/* José pesa 87.4 Kg. */
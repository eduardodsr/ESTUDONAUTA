var idade = 71

if (idade < 16) {
    console.log('Não vota')
}
else if (idade >= 18 && idade <= 70) {
    console.log('Voto obrigatório')    
}
else if ( (idade > 70) || (idade >= 16 && idade < 18) ) {
    console.log('Voto opcional')
}
function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`        
        window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = `<strong>Contando: </strong><br>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido!. Vou considerar Passo = 1')
            p=1
        }
        if (i < f) {
            // contagem crescente
                for (let count = i; count <= f; count += p ) {
                    res.innerHTML += ` \u{1F449} ${count} `
                }            
        } else {
            // contagem decrescente
                for (let count = i; count >= f; count -= p) {
                    res.innerHTML += ` \u{1F449} ${count} `
                }
        }
        res.innerHTML += ` \u{1F3C1}`
    }    
}
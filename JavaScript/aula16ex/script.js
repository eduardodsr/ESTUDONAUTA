/* let num = window.document.getElementById('fnum') */
let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')

let vetor = [] /* velor de valores */

function isNumero(n) {
    /* validar se é um numero entre 1 e 100, retorna true */
    if(Number(n) >=1 &&  Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    /* valor não encontrado na lista */
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false        
    }

}

function adicionar() {
    if ( isNumero(num.value) && !inLista(num.value, vetor) ) {
        // se não está em lista
        vetor.push(Number(num.value))
        
        /* criar Elemento, uma tag <option> dinamicamente com JS */
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
  
        /* Lista - Adicionar o ELemento Filho (Child) */
        lista.appendChild(item)
        res.innerHTML = '' /* limpar 'div#res' */

    } else {
        window.alert('Valor inválido ou já adicionado na lista!')
    }
    /* limpar o campo ('inpu#fnum'), input dos numeros */
    num.value = ''
    /* voltar com o foco do mouse */
    num.focus()
}

function finalizar() {
    /* Não pode finalizar sem nenhum dado na tela */
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {            
        let total = vetor.length        
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for(let index in vetor) {
            soma += vetor[index]
            if(vetor[index] > maior) {
                maior = vetor[index]
            }
            if(vetor[index] < menor) {
                menor = vetor[index]
            } 
        }

        media = parseFloat(soma/total)        
        
        res.innerHTML = '' /* limpar o res */
        res.innerHTML += `<p>Total de ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor: ${maior} </p>`
        res.innerHTML += `<p>O menor valor: ${menor} </p>`
        res.innerHTML += `<p>Soma dos valores: ${soma} </p>`
        res.innerHTML += `<p>Média dos valores: ${media} </p>`

    }
}
    

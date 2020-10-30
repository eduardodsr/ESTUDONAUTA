function tabuada() {

    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    /* validação */
    if (num.value.length == 0) {
        window.alert(`[ERRO]. Por favor digitar um número!`)      

    } else {
        /* Converter o valor ('txtn') para Number */
        let n = Number(num.value)

        /* tabuada */
        tab.innerHTML = '' /* limpar o resultado da minha tabuada */
        for (var c=1; c <= 10; c++) {
            /* Criando um Elemento 'option' para colocar no select */
            let item = window.document.createElement('option')           

            /* Resultado na tela da tabuada */
            item.text = `${n} x ${c} = ${n*c}`

            item.value = `tab${c}`

            /* Tabuada adicionar o ELemento Filho (Child) */
            tab.appendChild(item)            

        }
    }
    
}
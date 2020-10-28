function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() /* data atual */
    // var hora = data.getHours() /* hora atual */
    var hora = 20
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora < 12) {
        // bom dia!
        img.src = './img/manha.png'
        document.body.style.background = '#e6d2aa'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        img.src = './img/tarde.png'
        document.body.style.background = '#da751f'
    } else {
        // boa noite!
        img.src = './img/noite.png'
        document.body.style.background = '#392a46'
        
    }

}
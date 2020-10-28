function verificar() {
    //window.alert('Funcionou o botão!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')    
    // var res = document.getElementById('res') /* div="res" */  

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       // window.alert('Tudo OK!')
       // var fsex = document.getElementsByName('radsex')[0] // id="masc"
       // var fsex = document.getElementsByName('radsex')[1] // id="fem" 

       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)

       // res.innerHTML = `Idade calculada: ${idade}.` /* Testar a idade */

       /* criar fotos por script dinamicamente*/
       var img = document.createElement('img') /* criar uma tag <img> */
       img.setAttribute('id','foto') /* criei tag img com id="foto" */

       /* sexo */
       var genero = ''
       if (fsex[0].checked) {
           genero = 'HOMEM'           

           if (idade >=0 && idade <5) {
               // bebe
               img.setAttribute('src', 'foto-2.png')
           } else if (idade >= 5 && idade < 18) {
               // jovem
               img.setAttribute('src', 'foto-4.png')
           } else if (idade >=18 && idade < 60) {
               // homem adulto
               img.setAttribute('src', 'foto-6.png')
           } else if (idade >= 60) {
               // idoso
               img.setAttribute('src', 'foto-8.png')
           }
       } 
       else if (fsex[1].checked) {
            genero = 'MULHER'          

            if (idade >=0 && idade <5) {
                // bebe
                img.setAttribute('src', 'foto-1.png')
            } else if (idade >= 5 && idade < 18) {
                // jovem
                img.setAttribute('src', 'foto-3.png')
            } else if (idade >=18 && idade < 60) {
                // homem adulto
                img.setAttribute('src', 'foto-5.png')
            } else if (idade >= 60) {
                // idoso
                img.setAttribute('src', 'foto-7.png')
            }
       }       

       /* centralizar o texto */
       res.style.textAlign = 'center' /* <div id="res"> texto centralizado */
       res.style.font= 'normal 10pt Arial' /* <div id="res"> alterar fonte */
       res.innerHTML = `Detectamos ${genero} com ${idade} anos!`    
       
       /* adicionar o elemento img */
       res.appendChild(img)
     
    }
}
// Botão CHECAR
$('#checar_idade').click(function (){
    let data = new Date()
        ano = data.getFullYear()
        fano = document.getElementById('idade')
        res = document.querySelector('div#res')
        erroAlert = alert('[ERRO] Verifique os dados novamente!')

        if(fano.value.length == 0 || Number(fano.value) > ano){
            return erroAlert
    }  else {
        let fsex = document.getElementsByName('radsex'),
            idade = ano - Number(fano.value),
            genero = ''
            // Checa o gênero 
            fsex[0].checked ? genero = 'Homem' :
            fsex[1].checked ? genero = 'Mulher' :

    }
    $('#res').html(`${genero} de ${idade} anos`)
})



// Botão CHECAR
$('#checar_idade').click(function checarIdade(){
    let data = new Date(),
        ano = data.getFullYear() 
        fano = document.getElementById('idade')
        res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados novamente!')
    }  else {
        let fsex = document.getElementsByName('radsex'),
            idade = ano - Number(fano.value),
            genero = ''
            // check gênero
            fsex[0].checked ? genero = 'Homem' : fsex[1].checked ? genero = 'Mulher' : ''

        $('#res').html(`${genero} de ${idade} anos`)
    }
})



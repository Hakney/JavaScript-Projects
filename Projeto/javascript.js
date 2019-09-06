// Botão CHECAR
$('#checar_idade').click(function checarIdade(){
    let data = new Date(),
        anoAtual = data.getFullYear(), 
        Nascimento = $('#idade').val();
    if(Nascimento <= 0 || Nascimento > anoAtual){
        alert('[ERRO] Verifique os dados novamente!')        
    } else {
            idade = anoAtual - Nascimento,
            genero = ''
            // check gênero
            $('input#mas').is(':checked') ? genero = 'Homem' : 
            $('input#fem').is(':checked') ? genero = 'Mulher' : ''
            genero != '' ? $('#res').html(`${genero} de ${idade} anos`) : alert('Gênero não foi selecionado!')   
    }
})

// Botão CHECAR
$('#checar_idade').click(function checarIdade(){
    let data = new Date(),
        anoAtual = data.getFullYear(), 
        Nascimento = $('#idade').val();
    if(Nascimento <= 0 || Nascimento > anoAtual){
        alert('[ERRO] Verifique os dados novamente!')        
    } else {
        let fsex = document.getElementsByName('radsex'),
            idade = anoAtual - Nascimento,
            genero = ''
            // check gênero
            fsex[0].checked ? genero = 'Homem' : fsex[1].checked ? genero = 'Mulher' : ''
            genero != '' ? $('#res').html(`${genero} de ${idade} anos`) : alert('Gênero não foi selecionado!')   
    }
})

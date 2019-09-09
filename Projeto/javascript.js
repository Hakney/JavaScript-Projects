$('#checar_idade').click(function checarIdade(){
    let data = new Date(),
        anoAtual = data.getFullYear(), 
        Nascimento = $('#idade').val();
    if(Nascimento <= 0 || Nascimento > anoAtual){
         alert('[ERRO] Verifique os dados novamente!')        
    } else {
            idade = anoAtual - Nascimento,
            genero = $("input[name='radsex']:checked").val();
            genero ? $('#res').html(`${genero} de ${idade} anos`) : alert('Gênero não foi selecionado!')   
    }
})

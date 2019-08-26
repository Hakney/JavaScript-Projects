// Botão CHECAR
$('#checar_idade').click(function checarIdade(){
    let data = new Date()
    let ano = data.getFullYear() 
    let fano = document.getElementById('idade')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('ERRO')
    }  else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} de ${idade} anos`
    }
   
})


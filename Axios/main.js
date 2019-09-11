axios.get('https://api.github.com/users/Hakney')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    });

    // Requisição AXIOS

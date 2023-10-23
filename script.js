const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'


fetch(url)
.then((response) => response.json())
.then((jsonBody) => console.log(jsonBody))
.catch((error) => console.error(error))


.catch(function(error) {

    console.error(error)
})

.finally(function (){
    console.log('Requisição concluída')

})


//lista de funções que serão executadas ao carregar a página
$( document ).ready(function() {
    listar();
});


//Função que irá solicitar os livros cadastrar ao backend PHP e irá montar a tabela na tela
const listar =  () => {
    fetch('backend/listar-livro.php',{
        credentials: 'same-origin',
        method: 'POST',
        body: '',
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        }
    }).then(function(response){
        response.json().then(dados=>{
            //aqui é tratado o retorno do backend(montagem do Front)


        })
    })



}
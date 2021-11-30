//lista de funções que serão executadas ao carregar a página
$(document).ready(function () {
    listar();
});


//Função que irá solicitar os livros cadastrar ao backend PHP e irá montar a tabela na tela
const listar = () => {
    fetch('backend/listar-livro.php', {
        credentials: 'same-origin',
        method: 'POST',
        body: '',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        response.json().then(dados => {
            //aqui é tratado o retorno do backend(montagem do Front)

            //limpa as linhas da tabela , antes de montar o novo resultado
            $('#tabela-dinamica').html('')

            //estrutura de laço(loop) que verifica a quantidade de linhas no array DADOS e mapeia para montar as linhas da tabela  
            dados.map((livro) => {
                $('#tabela-dinamica').append(`
                <tr>
                <th scope="row">${livro.id}</th>
                <td>${livro.titulo}s</td>
                <td>${livro.isbn}</td>
                <td>${livro.autor}</td>
                <td>${livro.categoria}</td>
                <td>${livro.editora}</td>
                <td>R${livro.valor}</td>
            </tr>
               `)
            })

          
        })
    })



}
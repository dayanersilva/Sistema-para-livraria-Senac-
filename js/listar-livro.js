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

             //alert(dados.length)

            //estrutura de laço(loop) que verifica a quantidade de linhas no array DADOS e mapeia para montar as linhas da tabela 
            //verifica se existem resgistros dentro da variavel dados, caso existir monta as linhas das tabela, caso for 0 o tamanho nao tenho livros cadastrados exibe a mensagem do else
            if(dados.length !=0){ 
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
        }else{
            $('#tabela-dinamica').append(`
            <tr>
            <td colspan="7">Nenhum livro encontrado</td>
            </tr>
            `)
        }

        //Inicializar a Datatable ( a tabela sera trasformada em datatable aqui)
        $('#tabela-livros').DataTable({
            "language":{
                "url": "json/datatable_pt-br.json"
            },
            dom: 'Bfrtip',
            retrieve: true,
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
                'pdfHtml5',
                {
                    extend: 'print',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                'colvis'
              
            ]
        }) 

        })//fecha o response
    })//fecha o then



}//finaliza a função cadastrar
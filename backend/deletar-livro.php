<?php
//mostrar dados  recebidos do front via POST
//var_dump($_POST);

try {
    //captura os valores recebidos via POST
    $id = $_POST['id'];


    //captura os valores recebidos via POST e guarda nas variaveis especificas 
    $titulo    = $_POST['titulo'];
    $isbn      = $_POST['isbn'];
    $autor     = $_POST['autor'];
    $categoria = $_POST['categoria'];
    $editora   = $_POST['editora'];
    $valor     = $_POST['valor'];
    
    //Inclui o arquivo de conexão com os Bancos de Dados
    include 'conexao.php'; 


// variavel que ira armazenar o comando SQL a ser executada no BD
    $sql = " DELETE FROM tb_livro WHERE id = $id";

    // debug da variavel SQL
    // echo $sql;

    //prepara a execução do comando $sql armazenado na variável 
    $comando = $conexao->prepare($sql);

    //executa o comando no banco de dados
    $comando->execute();

    //cria um array chave/valor para ser convertido em JSON e retornado ao FRONT
    $retorno = array('retorno'=>'Sucesso', 'mensagem'=>'Cadastro deletado com sucesso');

    //transforma o array de retorno em formato JSON 
    $json = json_encode($retorno, JSON_UNESCAPED_UNICODE);

    //retorna o JSON ao Front
    echo $json;

} catch (PDOException $erro) {
    //cria um array chave/valor para ser convertido em JSON e retornado ao FRONT
    $retorno = array('retorno'=>'Erro', 'mensagem'=>$erro->getMessage());

    //transforma o array de retorno em formato JSON 
    $json = json_encode($retorno, JSON_UNESCAPED_UNICODE);

    //retorna o JSON ao Front
    echo $json;

}
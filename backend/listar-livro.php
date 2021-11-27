<?php

try {
    // inclui o arquivo de conexao
    include 'conexao.php';


    //comando que será executado no BD para realizar o SELECT de todos os dados
    $sql = "SELECT *  FROM tb_livro";

    //prepara a execução do comando SQL no BD
    $comando = $conexao ->prepare($sql);

    //executa o comando SQL no BD
    $comando->execute();

    //Armazena os Dados  retornados pelo banco dentro da variável dados, o fetchALLé responsável por organizar os dados em modo associativolinha/coluna/valor
    $dados = $comando->fetchALL(PDO::FETCH_ASSOC);

    //converte os dados armazenados na variável dados em formato JSON para retorno ap frontend
    $json = json_encode($dados, JSON_UNESCAPED_UNICODE);

    echo $json ;

   
} catch (PDOException $erro) {

    
    
}


?>
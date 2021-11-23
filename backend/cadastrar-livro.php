<?php
//mostrar dados  recebidos do front via POST
//var_dump($_POST);

try {
    //captura os valores recebidos via POST e guarda nas variaveis especificas 
    $titulo    = $_POST['titulo'];
    $isbn      = $_POST['isbn'];
    $autor     = $_POST['autor'];
    $categoria = $_POST['categoria'];
    $editora   = $_POST['editora'];
    $valor     = $_POST['valor'];
    
    //Inclui o arquivo de conexão com os Bancos de Dados 


    
} catch (PDOException $erro) {
    
}



?>
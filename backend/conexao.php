<?php

    // variaveis com os dados da conexão com o servidor 
    $servidor_bd    = 'localhost';
    $usuario_bd     = 'root';
    $senha_bd       = '';
    $database_bd    = 'db_livraria';


    try{
        //realiza a conexão com o banco de dados
        $conexao = new PDO("mysql:host=$servidor_bd;dbname=$database_bd;charset=utf8",$usuario_bd,$senha_bd);
        $conexao->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        //echo 'Conectado';

    }catch (PDOException $erro){
        //caso a conexão mão seja realizada, exibe o erro
        echo 'Erro ao conectar no banco de dados: ' .$erro->getMessage();
        exit();
    }

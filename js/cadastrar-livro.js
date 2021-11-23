//Função que valida e captura os dados do formulário de cadastro de livros e envia para o backend PHP
const cadastrar = () =>{
   // validação dos campos usando JS

   //campo nome
   //captura o valor preenchido no INPUT titulo
   let titulo =$('#titulo').val();
   let isbn = $('#isbn').val();
   let autor = $('#autor').val();
   let categoria = $('#categoria').val();
   let editora = $('#editora').val();
   let valor = $('#valor').val();


   if(titulo ==''){
       $('#titulo').addClass('is-invalid');
       return
   }else{
    $('#titulo').removeClass('is-invalid')
    $('#titulo').addClass('is-valid')
   }

   if(isbn ==''){
     $('#isbn').addClass('is-invalid');
     return
   }else{
    $('#isbn').removeClass('is-invalid')
    $('#isbn').addClass('is-valid')
   }

   if(autor ==''){
     $('#autor').addClass('is-invalid');
     return
   }else{
    $('#autor').removeClass('is-invalid')
    $('#autor').addClass('is-valid')
   }

   if(categoria == null){
     $('#categoria').addClass('is-invalid');
     return
   }else{
    $('#categoria').removeClass('is-invalid')
    $('#categoria').addClass('is-valid')
   }

   if(editora == null){
    $('#editora').addClass('is-invalid');
    return
  }else{
    $('#editora').removeClass('is-invalid')
    $('#editora').addClass('is-valid')
   }

  if(valor == ''){
    $('#valor').addClass('is-invalid');
    return
  }else{
    $('#valor').removeClass('is-invalid')
    $('#valor').addClass('is-valid')
   }

  console.log(`titulo:${titulo}, ISBN:${isbn}, Autor:${autor}, Categoria:${categoria}, Editora:${editora}, Valor:${valor}`)

  //Final da validação JS

  //Inicio de envio de dados para o PHP
  //Serializar os dados do formulário para envio
  // a variavel form, irá receber as chaves e valores preenchidos no form cadastrar
  let form =  new FormData($('#form-cadastrar')[0])

  //envios dos dados utiliando o FETCH
  fetch('backend/cadastrar-livro.php',{
    method: 'POST',
    body: form 
  })

}

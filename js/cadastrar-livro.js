//Função que valida e captura os dados do formulário de cadastro de livros e envia para o backend PHP
const cadastrar = () =>{
   // validação dos campos usando JS

   //campo nome
   //captura o valor preenchido no INPUT titulo
   let titulo =$('#titulo').val()

   if(titulo==''){
       $('#titulo').addClass('is-invalid')
       return
   }

  // console.log(`titulo:${titulo}`)

}
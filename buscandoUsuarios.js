function realizarBusca(){
    //Pegando o código selecionado na caixa de seleção.
    var codigo = document.getElementById("meuUser").value;
    console.log("Codigo selecionado = "+codigo);
    

    //montando URL com o padrão do site java place holders.
    var URL = "https://jsonplaceholder.typicode.com/users/"+codigo;
    console.log(codigo+" essa é a URL.");

    //Forma de buscar através do fetch.
    fetch(URL,{method:"GET"})
    .then(response => response.json())
    .then(json => carregarForms(json));
}

//Função que vai escrever no html os dados do usuário.
function carregarForms(json){
    var formulario = document.getElementById("formulario");
    /*formulario.innerHTML = JSON.stringify(json); //O primeiro JSON sempre em maiusculo e faz aparecer o texto em formato jason.*/

    formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Nome Completo</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.username + '</textarea></div>'

    /*OUTRO*/
    formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Nome de Usuário Completo</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.username +'</textarea></div>'


/*OUTRO*/  
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Email do usuário</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.email+ '</textarea></div>'



/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Endereço</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.address.street + '</textarea></div>' 



/*OUTRO*/
formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Endereço</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.address.suite+ '</textarea></div>'



/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Cidade</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.address.city+ '</textarea></div>'




/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Zipcode</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.address.zipcode+ '</textarea></div>'




/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Telefone/Celular</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.phone+ '</textarea></div>'




/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">WebSite</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.website +'</textarea></div>' 




/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Nome da empresa</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.company.name + '</textarea></div>'



/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Slogan</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.company.catchPhrase + '</textarea></div>'



/*OUTRO*/
 formulario.innerHTML += '<form><div class="form-group">'
    formulario.innerHTML += '<label for="exampleInputEmail1">Busines</label>'
    formulario.innerHTML += '<textarea class="form-control" id="exampleFormControlTextarea1" rows="1">'+json.company.bs + '</textarea></div>' 


/*Final*/
    formulario.innerHTML +='</form>'
   
}


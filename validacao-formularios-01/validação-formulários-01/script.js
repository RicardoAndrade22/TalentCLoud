// ---------- VALIDAÇÃO USERNAME ---------- //
// criando relacionamento
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

/*  CRIANDO FUNÇAO POLIFORMICA PARA REAPROVEITAR O CODIGO
Mostrar popup de campo obrigatório */
function mostrarPopup(input,label){
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })
    // Ocultar popup de campo obrigatório QUANDO QUANDO NAO ESTIVER NO FOCO(SELECIONADO)
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
})
}

// Validar valor do input
usernameInput.addEventListener("change", function(e){
    //pega o valor do input
    let valor = e.target.value
    
    //validacao, verifica a qtd de caracter
    if(valor.length < 4){
        //se for menor a qtd de caracter aplicara erro   
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
       
        //mensagem de erro
        usernameHelper.classList.add("visible")
        usernameHelper.innerText="seu usere name deve ter mais de 3 caracter"
    
    }else{
        //se for maior a qtd de caracter aplicara correct   
        usernameInput.classList.add("correct")
        usernameInput.classList.remove("error")
        
        //tirando a mensagem de erro
        usernameHelper.classList.remove("visible")
    }



})


//---------------- VALIDAÇÃO EMAIL----------------
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper")

emailInput.addEventListener("change", function(e){
    let valor = e.target.value

    //verificando se input tem "@" ou ".com"
    if(valor.includes("@") && valor.includes(".com")){
        
        emailInput.classList.add("correct")
        //removendo classes de erro e mensagem
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")

    }else{
       //se nao tem "@" ou ".com", acrescentando classes de erro  
       emailInput.classList.add("error")
       // removendo classe de valido
       emailInput.classList.remove("correct")
       //ADD mensagem de erro 
       emailHelper.classList.add("visible")
       emailHelper.innerText="Seu email falta '@'' ou '.com' "   
    }
})

//---------------- VALIDAÇÃO IDADE----------------
let idadeInput = document.getElementById("idade")
let idadeLabel = document.querySelector('label[for ="idade"]')
let idadeHelper = document.getElementById("idade-helper")
console.log(idadeHelper)

idadeInput.addEventListener("change",function(event){
    // obter valor do input
    let valor = event.target.value
    
    // verifica se idade tem mais de 2 numeros 
    if(valor.length >2){
        //removendo classe de valida
        idadeInput.classList.remove("correct")
        // adicinando classes de error
        idadeInput.classList.add("error")
        idadeHelper.classList.add("visible")
        // alterando mesnagem para o usuario
        idadeHelper.innerText = "somente numeros até 99"
        
    }else{
        idadeInput.classList.remove("error")
        idadeInput.classList.add("correct")
        idadeHelper.classList.remove("visible")

    }


})

mostrarPopup(usernameInput,usernameLabel)
mostrarPopup(emailInput,emailLabel)
mostrarPopup(idadeInput,idadeLabel)


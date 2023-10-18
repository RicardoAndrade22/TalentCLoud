// Ricardo Teles
// Adailton Daniel
// Isaias Oliveira
// Pedro Souza
// João Pedro Fonseca

const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

//keyup é um evento de telado
//aqui
document.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);
  if (e.code == "Escape") {
    console.log("Fechar Menu");
    navPerfil.style.display = "none";
  }
  
  if(navPerfil.style.display == "block"){
    if (e.code == "Digit1") 
      linkPerfilDados.click()
     
  }else if(e.code == "Digit1"){
    navPerfil.style.display = "block";
    console.log("abrir menu")
  }
  



});

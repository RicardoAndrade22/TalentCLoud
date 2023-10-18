console.log("")

const bt = document.querySelector("button")
const id = document.getElementById("login-usuario")
const errorMessage = document.querySelectorAll(".error-text")
const senha = document.getElementById("login-senha");


bt.style.color ="white"
bt.style.fontSize ="25px"
bt.style.fontWeight = "bold"
bt.style.height= "60px"
bt.style.backgroundColor ="black"
bt.style.margin ="auto"


id.classList.add("correct")
//id.classList.add("")

senha.classList.add("error")
errorMessage[1].classList.add("visible")


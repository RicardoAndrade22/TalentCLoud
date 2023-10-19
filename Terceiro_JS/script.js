let body = document.body
let h1 = document.createElement("h1")
h1.id = "titulo"
h1.innerText = "vende-se letras"
body.appendChild(h1)
console.log(h1)

let imagem = document.createElement("img")

imagem.src = "data:image/jpeg;base64,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"
body.appendChild(imagem)

let h2 = document.createElement("h2")
h2.innerText = "valores "
body.appendChild(h2)

let p = document.createElement("p")

p.innerText = `VOGAIS $ 1,99  CONSOANTES $33,77`
body.appendChild(p)

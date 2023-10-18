let h1 = document.getElementById("titulo")
let ul = document.getElementById("lista-desordenada")
let a = document.getElementsByTagName("a")[0]
let ol = document.getElementById("lista-ordenada")
console.log(ol)


h1.innerText=("Titulo criado agora via js")
a.innerText=("texto criado agora via js para essa tag ")
ul.innerHTML+=("<li> item1 </li>")
ul.innerHTML+=("<li> item2 </li>")
ul.innerHTML+=("<li> item3 </li>")

ol.innerHTML+=("<li><a href='http://google.com'>Link 1</a></li>")
ol.innerHTML+=("<li><a href='http://globo.com'>Link 2</a></li>")
ol.innerHTML+=("<li><a href='http://r7.com'>Link 3</a></li>")
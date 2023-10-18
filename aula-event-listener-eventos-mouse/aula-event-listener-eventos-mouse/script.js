let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
atualiza()

// ------------ Variaveis -------------
let botaoAdicionar = document.querySelector('#btn-adicionar-produto-01')
let botaoSubtrair = document.querySelector('#btn-subtrair-produto-01')
let valorCampo = document.querySelector('#quantidade-produto-01')
let valorproduto1 = 11.66

// ------------ Funcoes ---------------

function atualiza(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

function adicionarUm(){
  // Convertendondo string para number
  valorCampo.value = Number(valorCampo.value)+1 
  
  // Manioular a quantidade do objeto subtotalInfo
  subtotalInfo.quantidade++
  
  // Manioular a valor do objeto subtotalInfo
  subtotalInfo.valor= subtotalInfo.valor + valorproduto1
  
  // atualizar DOM
  atualiza() 
}

function subtrairUm(){
  // Convertendondo string para number
  valorCampo.value = Number(valorCampo.value) - 1
  
  // Manioular a quantidade do objeto subtotalInfo
  subtotalInfo.quantidade--
  
  // Manioular a valor do objeto subtotalInfo
  
  subtotalInfo.valor= subtotalInfo.valor - valorproduto1
  // atualizar DOM
  atualiza()
}

// ------------ Eventos ---------------

botaoAdicionar.addEventListener('click', adicionarUm)
botaoSubtrair.addEventListener('click', subtrairUm)

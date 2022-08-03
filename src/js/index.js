// window.alert("Bem vindo")
const btnseta = document.getElementById("btn-seta");
const btnsetav = document.getElementById("btn-setav");
const cartoes = document.querySelectorAll(".cartao");
let cartaoatual = 0;

function escondercartaoselecionado(){
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");
}
function adicionarcartaoselecionado(IndiceCartao){
    cartoes[cartaoatual].classList.add("selecionado");
}
    


btnseta.addEventListener("click", function () {
    if (cartaoatual === cartoes.length -1) return;
  
    escondercartaoselecionado();   
    cartaoatual++;
    adicionarcartaoselecionado(cartaoatual); 
});

btnsetav.addEventListener("click", function () {
    if (cartaoatual === 0)return; 
    
    escondercartaoselecionado();        
    cartaoatual--;
    adicionarcartaoselecionado(cartaoatual);
  
    
})


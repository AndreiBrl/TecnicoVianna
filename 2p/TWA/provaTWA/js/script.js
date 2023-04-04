var h2 = document.querySelector(".resposta h2");
function tabuada(operador){
    
    var conta=" ";
    for (let i = 1; i <= 9; i++) {
        conta+=operador+" x "+i+" = "+operador*i+" "+ "\n";
    }


    h2.textContent=conta;
    h2.style.width="100px";
    
}


// questão 2
var btn1 = document.querySelector(".btn1");

function cancela(event){
    event.preventDefault();
}

var diasMes = document.querySelectorAll(".mes td");

btn1.addEventListener("click", function(){
    var caixa1=document.querySelector(".caixa1").value;

    diasMes.forEach(element=>{
        if(element.classList.contains("destaque")){
            element.classList.remove("destaque");
        }
    });
    
    diasMes.forEach(element => {
        
        if(element.innerText==caixa1  ){
            element.classList.add("destaque");
           
            
            
            
        }
        
    });



})
// questão 2 B

var btn2=document.querySelector(".btn2");

btn2.addEventListener("click",function(){

var caixaPrimeiroDia= document.querySelector(".caixaPrimeiroDia").value;
var caixaSegundoDia=document.querySelector(".caixaSegundoDia").value;
        
diasMes.forEach(element=>{
    if(element.classList.contains("destaque")||element.classList.contains("destaque2")||element.classList.contains("destaque3")){
        element.classList.remove("destaque");
        element.classList.remove("destaque2");
        element.classList.remove("destaque3");
    }
});
        
    diasMes.forEach(element => {
        
        if(element.innerHTML==parseInt(caixaPrimeiroDia)|| element.innerHTML==parseInt(caixaSegundoDia)){
            element.classList.add("destaque3");
        }

        if(element.innerHTML>parseInt(caixaPrimeiroDia) && element.innerHTML<parseInt(caixaSegundoDia)){
            
            element.classList.add("destaque2");
            

        }

    });

});

// questão 3

var img = document.querySelector(".questao3 img")
var contaImagem=1;
img.style.cursor="pointer";
img.style.borderRadius="5px";
img.addEventListener("click", function(){
    contaImagem++;
    
    if(contaImagem>3){
        contaImagem=1;
    }
    console.log(contaImagem);
    img.src="./img/img"+contaImagem+".jpg";



});
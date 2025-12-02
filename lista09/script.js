function media(){
   var nota1 = parseFloat(document.getElementById("m1").value)
   var media= document.getElementById("resposta")
  

   if(nota1 >= 6){
   media.textContent = "PASSOU DE ANO"
   media.style.color = "green"
   }else{
    media.textContent = "REPROVOU DE ANO"
    media.style.color ="red"
   }
   
}
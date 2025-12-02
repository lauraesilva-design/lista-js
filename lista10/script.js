function play(){
     var idade1 = parseFloat(document.getElementById("idade1").value)
     var idade2 = parseFloat(document.getElementById("idade2").value)

     if(idade1 > idade2 ){
         document.getElementById("resp").textContent = "as primeira é maior"

     } else if(idade1 < idade2){
         document.getElementById("resp").textContent = "as segunda é maior"

     }else{
         document.getElementById("resp").textContent = "elas são iguais"
     }


}

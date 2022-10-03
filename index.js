//  function alterarImagem(){
//      let btnTurnOn = document.getElementsByClassName("on");
 
//     let lampadaOff = btnTurnOn[0]
    

//      lampadaOff.setAttribute("src","css/images/on.png")
     
//  }


const switchOn = document.getElementById("on");
const switchOff = document.getElementById("off");

switchOn.addEventListener("click",function(){
             document.getElementById("img").src="css/images/on.png";
      
 })

 switchOff.addEventListener("click",function(){
     document.getElementById("img").src="css/images/off.png";

 })
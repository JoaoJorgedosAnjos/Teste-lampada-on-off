const switchOn = document.getElementById("on");
const switchOff = document.getElementById("off");

switchOn.addEventListener("click",function(){
             document.getElementById("img").src="src/css/images/on.png";
      
 })

 switchOff.addEventListener("click",function(){
     document.getElementById("img").src="src/css/images/off.png";

 })

var mario = document.querySelector("div");



function running (){
   
     if(event.keyCode == '39'){
      mario.className = "gif";
      }
     
   
    

}
function stopRun (){
    mario.className= "img";
}


addEventListener("keyup",function(event){
   stopRun();
   });

addEventListener("keydown",function(event){
 running();
});
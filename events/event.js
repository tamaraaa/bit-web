
 var player = document.querySelector("img");
var listener = document.querySelector("body");
var button  = document.querySelector("button");

function moveImg (event){
   var middle = player.width / 2;

   player.style.top= (event.clientY-middle) + "px";
   player.style.left = (event.clientX-middle) + "px";
}


function stopMoving (event){
    listener.removeEventListener("click",moveImg);
}


listener.addEventListener("click",moveImg);
button.addEventListener("click",stopMoving);
var screen = document.querySelector(".chat");
var btn = document.querySelector(".Send");

btn.addEventListener("click",function(event){
   message();
   
})
function message (){
    var input = document.querySelector(".Text").value;
    var newMessage = document.createElement("p");
    newMessage.innerHTML = input;
    screen.appendChild(newMessage);
    
}
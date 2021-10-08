var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
        
    },500);

 
    
}
setInterval(()=>{
    score++;
},1000)
var checkCollision = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>0 && characterTop >= 130){
        block.style.animation = "none";
        block.style.animation = "none";
        
alert(parseInt(score/10));
    }
    score++
},10);
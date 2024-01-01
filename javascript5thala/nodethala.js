
function result(){

    var userInput = document.getElementById("userInput").value;
var res;
var a = userInput.length;
var x = 7 - a;
if(a>7){
    console.log(`${a} ${x}`);

     res = a + "" + x +  " = 7";}
else{
    console.log(`${a} + ${x}`);
   res = a + "+" + x + " = 7";}

   document.getElementById("output").innerText = res;

}
 document.getElementById("inputBtn");
 document.getElementById("submitBtn")
 document.getElementById('submitBtn').addEventListener("click", function() {
    result();
    var video = document.getElementById('myVideo');
    video.style.display = 'block'; 
    video.play();

});

document.getElementById('userInput').addEventListener("keypress", function() {
    if(event.key === "Enter"){
    result();
    var video = document.getElementById('myVideo');
    video.style.width = '100%';
        // video.style.height = '400px';
         video.style.border = '4px solid black';
        // video.style.margin = '10px';
        // video.style.backgroundColor = 'brown';
        // video.style.marginLeft = '547px';
    video.style.display = 'block'; 
    video.play();
}
});

document.getElementById("resetBtn").addEventListener("click" ,function(){
    var video = document.getElementById('myVideo');
    video.currentTime = 0;           
    video.pause();
    video.style.display = 'none';
    var inputText = document.getElementById("userInput")
    inputText.value = '';

    
} );

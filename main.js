var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var birth_o="";
function new_image()
{
fabric.Image.fromURL("dad.jpg",function(Img){
   birth_o=Img;
   birth_o.scaleToWidth(700);
    birth_o.scaleToHeight(510);
    birth_o.set({top:0,left:0});
    canvas.add(birth_o);
});	
	
}

function playSound(){
	x.play();
}

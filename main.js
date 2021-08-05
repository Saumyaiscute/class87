var canvas=new fabric.Canvas("myCanvas");

player_X=10;
player_Y=10;

block_image_width=30;
block_image_height=30;

 var player_image="";
 var block_image_object="";

 function player_update() {
    fabric.Image.fromURL("player.png", function (image){
        player_image=image;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({top:player_Y, left:player_X});

        canvas.add(player_image);
        
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (image){
        block_image_object=image;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:player_Y, left:player_X});

        canvas.add(block_image_object);
        
    })
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypressed=e.keyCode;
    if(e.shiftKey==true&&keypressed=="80"){
        block_image_width=block_image_width+10
        block_image_height=block_image_height+10

        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
    }

    if(e.shiftKey==true&&keypressed=="77"){
        block_image_width=block_image_width-10
        block_image_height=block_image_height-10

        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
    }

    if(keypressed=="87"){
        new_image("wall.jpg")
    }


    if(keypressed=="71"){
        new_image("ground.png")
    }


    if(keypressed=="76"){
        new_image("light_green.png")
    }


    if(keypressed=="84"){
        new_image("trunk.jpg")
    }

    

    if(keypressed == '82')
 { new_image('roof.jpg'); console.log("r"); }
 
 if(keypressed == '89')
  { new_image('yellow_wall.png'); console.log("y"); }
  
  if(keypressed == '68')
   { new_image('dark_green.png'); console.log("d"); } 
  
   if(keypressed == '85') 
  { new_image('unique.png'); console.log("u"); } 
  
  if(keypressed == '67')
   { new_image('cloud.jpg'); console.log("c"); }


if(keypressed == '38') 
{ up(); console.log("up"); } 

if(keypressed == '40')
 { down(); console.log("down"); } 

if(keyPressed == '37')
 { left(); console.log("left"); } 

if(keypressed == '39') 
{ right(); console.log("right");
}



function up() {
 if(player_Y >=0) 
 { 
    player_Y = player_Y - block_image_height;
     console.log("block image height = " + block_image_height);
     console.log("When Up arrow key is pressed, X = " + player_X + " , Y = "+player_Y); 
     canvas.remove(player_image); player_update(); } }

function left() 
{ 
    if(player_X >0) { 
    player_X = player_X - block_image_width; console.log("block image width = " + block_image_width);
    console.log("When Left arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
    canvas.remove(player_image);
    player_update(); } }

function right() {
     if(player_X <=850) {
          player_X = player_X + block_image_width;
           console.log("block image width = " + block_image_width); 
           console.log("When Right arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
           canvas.remove(player_image); player_update(); } }

function down() {
     if(player_Y <=500) { 
         player_Y = player_Y + block_image_height;
         console.log("block image height = " + block_image_height);
         console.log("When Down arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
         canvas.remove(player_image); player_update(); } }
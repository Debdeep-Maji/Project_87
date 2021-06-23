 var canvas = new fabric.Canvas('myCanvas');
block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

window.addEventListener("keydown", my_key_down);

function my_key_down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (keyPressed=='82') {
        block_x = 200;
        new_image("Red_Ranger.png");
        console.log("r");
    }

    if (keyPressed=='71') {
        block_x = 200;
        new_image("Green_Ranger.png");
        console.log("g");
    }

    if (keyPressed=='89') {
        block_x = 350;
        new_image("Yellow_Ranger.png");
        console.log("y");
    }

    if (keyPressed=='80') {
        block_x = 600;
        new_image("Pink_Ranger.png");
        console.log("p");
    }

    if (keyPressed=='66') {
        block_x = 500;
        new_image("Blue_Ranger.png");
        console.log("b");
    }
}
 
function new_image(get_image) 
{
fabric.Image.fromURL(get_image,function (Img){
block_image_object= Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_width);
block_image_object.set({
    top:block_y,
    left:block_x
});
canvas.add(block_image_object);
});
}
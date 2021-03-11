var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
x_position=10;
y_position=10;
player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;


        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:y_position,
            left:x_position
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

    block_object.set({
        top:y_position,
        left:x_position
    });
       canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("Shift and p key are pressed");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyPressed=="77"){
        console.log("shift and m keys are pressed");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=="70"){
        console.log("f");
        new_image("spiderman_face.png");
    }
    if(keyPressed=="66"){
        console.log("b");
        new_image("hulkd_body.png");
    }
    if(keyPressed=="76"){
        console.log("l");
        new_image("ironman_legs.png");
    }
    if(keyPressed=="82"){
        console.log("r");
        new_image("thor_right_hand.png");
    }
    if(keyPressed=="72"){
        console.log("h");
        new_image("captain_america_left_hand.png");
    }
    if(keyPressed=="38"){
        console.log("up");
        up();
    }
    if(keyPressed=="40"){
        console.log("down");
        down();
    }
    if(keyPressed=="37"){
        console.log("left");
        left();
    }
    if(keyPressed=="39"){
        console.log("right");
        right();
    }

}
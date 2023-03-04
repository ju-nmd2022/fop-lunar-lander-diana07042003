

let game_running=false;



function tomato(x, y) {
    push();
    translate(x, y);
  

//Tomato

push();
fill(139, 0, 0);
noStroke();
ellipse(300, 280, 30);
pop();

push();
fill(1, 50, 32);

beginShape();
 
 vertex(300, 265);
 bezierVertex(290, 230, 290, 275, 300, 270);
 bezierVertex(280, 270, 280, 280, 310, 275);
 
endShape();
pop();
}

function scenary() {
    push();
    noStroke();
    fill(249, 232, 163);
   
    
   

//Table

fill(31,115,81);
noStroke();
rect(-100, 900, 900, 100);


//Plate

fill(175,167,55);
noStroke();
rect(230, 900, 230, 110);


push();
fill(255, 255, 255);

stroke(202, 132, 62);
strokeWeight(15);
ellipse(350, 940, 160, 110);
pop();

//Fork
push();

fill(85, 47, 9);
rect(445, 920, 5, 70, 5);
ellipse(447, 920, 25, 30);
pop();

push();
fill(175,167,55);
ellipse(447, 915, 10, 30);
pop();
}
  

function blocks(x, h) {
    push();
    const w = h *2 ;
    const y = 100;
  
  fill(139,69,19);
  
  rect(x, y+300, w, y - 95);
  
  rect(x, y+500, w, y-95);
  
  rect(x, y+700, w, y-95);
  
  pop();
  }
  
 let blocksX=200;
let direction= "right";



  function play() {
    background(249, 232, 163);
    tomato(50, -250);
    scenary();
    blocks(blocksX, 100);
    
    if(direction== "right"){
        blocksX= blocksX + 2;
        }
      
    
        if(direction=="left"){
          blocksX= blocksX - 1;
        }
    
        if(blocksX>=500) {
          direction = "left";
        }
    
        if(blocksX<=0){
          direction= "right";
        }
  }

function draw(){
    background(249, 232, 163);

    if(! game_running){
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(139, 0, 0);
        text('The aventure of the tomato', 400, 150);
        text('Click to start', 400, 600);
        
        fill(0, 0, 0);
        textSize(20);
        text('Welcome to the land of the tomatoes! ', 400, 300);
    
        fill(0, 0, 0);
        textSize(17);
        text('Your main task is to land the tomato on the plate, BUT be careful, you can not hit any obtacles!', 400, 350);
    
        fill(0, 0, 0);
        textSize(30);
        text('Good Luck!', 400, 480);

        if(mouseIsPressed){
            game_running=true;
        }
        else{
            play();
        }
    }
    }
   










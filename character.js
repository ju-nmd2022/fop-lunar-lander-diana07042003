let game_running=false;

function setup(){
    createCanvas(800, 740);
}

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
pop();
}

function scenary() {
    push();
    noStroke();
    fill(249, 232, 163);
   
    
   

//Table

fill(31,115,81);
noStroke();
rect(-100, 650, 900, 100);


//Plate

fill(175,167,55);
noStroke();
rect(250, 650, 230, 110);


push();
fill(255, 255, 255);

stroke(202, 132, 62);
strokeWeight(15);
ellipse(370, 680, 160, 110);
pop();

//Fork
push();

fill(85, 47, 9);
rect(465, 670, 5, 70, 5);
ellipse(468, 670, 25, 30);
pop();

push();
fill(175,167,55);
ellipse(468, 665, 10, 30);
pop();
pop();
}


function blocks(x, h) {
    push();
    const w = h *2 ;
    const y = 100;
  
  fill(139,69,19);
  
  
  pop();
  }
  

let blocksX=100;
let direction= "right";
let tomatoY = -200;
let velocity = 0;
let acceleration = 0.1;
let isGameActive = true;
var screen = 1;






  function play() {

    
    background(249, 232, 163);
    tomato(60, tomatoY);
    scenary();
    blocks(blocksX, 150);
    
    if (isGameActive) {
        blocksX = blocksX - 1;
        tomatoY = tomatoY + velocity;
        velocity = velocity + acceleration;
      
        if (blocksX < -100) {
        blocksX = width + 100;
        }

        if (mouseIsPressed){
            velocity=velocity-0.1;
        }

        if (tomatoY > 320 && velocity>2.5) {
            isGameActive = false;
            screen = 3;
          }


        if (tomatoY > 320 && velocity<2.5){
            isGameActive = false;
            screen = 4;
        }
      
        if (tomato>=320  && velocity <2) {
          winScreen();
        }
        else if ( tomato<=320  && velocity>2){
            losingScreen();


            velocity = 0;
        }
    
  
    
  
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
  
  
  if (mouseIsPressed) {
    velocity = velocity - 0.1;
  }
  
}

    

}
  
  

    function mousePressed() {
      if (screen === 3 || screen === 4) {
      
        resetGame();
      } else {
        
        velocity = velocity - 0.3;
      }
    }
    
    function resetGame() {
      // Reset all relevant variables to their initial values
      game_running = false;
      screen = 1;
      blocksX = 100;
      tomatoY = -200;
      velocity = 0;
      isGameActive = true;
    }
   

  

 

 

function first(){
    background(249, 232, 163);
    if(! game_running){
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(139, 0, 0);
        text('The adventure of the tomato', 400, 150);
        text('Click to start', 400, 600);
        
        fill(0, 0, 0);
        textSize(20);
        text('Welcome to the land of the tomatoes! ', 400, 300);
    
        fill(0, 0, 0);
        textSize(17);
        text('Your main task is to land the tomato on the plate, BUT be careful, you have to do it as slow as possible!', 400, 350);
    
        fill(0, 0, 0);
        textSize(30);
        text('Good Luck!', 400, 480);

        if(mouseIsPressed){
            game_running=true;
        }
        
    }else{
      
        play();
    }
}
   
   
function draw(){ 
    
   
    
    
    if(screen == 1){
      first();
    }

    if(screen == 2 ){
        play();
    }

    
    if(screen == 3 ){
        losingScreen();
    }

    
    if(screen== 4 ){
        winScreen();
    }


    

}


function losingScreen(){
    background(249, 232, 163);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(139, 0, 0);
    text('You Lost', 400, 150);
    text('Better luck next time', 400, 600);
    text('Click to restart the game!', 400, 680);

    
    }
   

function winScreen(){
    background(249, 232, 163);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(139, 0, 0);
    text('You Won', 400, 150);
    text('Great job!', 400, 600);
    text('Click to restart the game!', 400, 680);
   
}
   









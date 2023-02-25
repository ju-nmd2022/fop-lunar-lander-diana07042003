background(255, 255, 255);

//Tomato

push();
fill(139, 0, 0);
noStroke();
ellipse(300, 280, 40);
pop();

push();
fill(1, 50, 32);

beginShape();
 
 vertex(300, 265);
 bezierVertex(290, 230, 290, 275, 300, 270);
 bezierVertex(280, 270, 280, 280, 310, 275);
 
endShape();

pop();

//Table

fill(255,222,173);
noStroke();
rect(0, 620, 800, 700);


//Plate

fill(205,92,92);
noStroke();
rect(265, 625, 230, 110);


push();
fill(255, 255, 255);

stroke(230, 221, 197);
strokeWeight(15);
ellipse(380, 680, 170, 100);
pop();

//Obstacles

fill(139,69,19);
rect(400, 50, 400, 20);
rect(0, 100, 300, 20);
rect(0, 180, 400, 20);
rect(400, 280, 400, 20);
rect(0, 500, 250, 20);
rect(380, 470, 450, 20);
rect(0, 350, 200, 20);
rect(300, 400, 500, 20);

















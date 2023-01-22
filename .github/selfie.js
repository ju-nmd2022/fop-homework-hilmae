background(200, 225, 255);
noStroke();

// hår
fill(220, 210, 130);
arc(200, 350, 750, 700, 0, PI / 0.4);

fill(220, 210, 130);
arc(200, 645, 140, 110, 0, PI / 0.3);

push();
translate(300, 140);
rotate(1);
fill(200, 225, 255);
ellipse(338, 385, 90, 80);
pop();

// Moln
fill(130, 170, 200);
ellipse(600, 325, 140, 132);

fill(130, 170, 200);
ellipse(180, 325, 140, 132);

fill(130, 170, 200);
rect(187, 300.9, 412, 90);

fill(130, 170, 200);
ellipse(320, 260, 260, 230);

fill(130, 170, 200);
ellipse(400, 190, 130, 120);

fill(130, 170, 200);
ellipse(480, 250, 200, 150);

// vänster öga
strokeWeight(1);
stroke(0, 9, 0);
fill(255, 255, 255);
ellipse(325, 250, 45);

// höger öga
ellipse(430, 250, 45);

// ögonfransar
fill(130, 170, 200);
arc(310, 227, 25, 20, 2, PI);

fill(130, 170, 200);
arc(315, 223, 25, 20, 2, PI);

fill(130, 170, 200);
arc(445, 227, 25, 20, 0, PI / 2.5);

fill(130, 170, 200);
arc(440, 222, 25, 20, 0, PI / 2.5);

// vänster öga
push();
translate(0, -8);
fill(60, 100, 130);
ellipse(325, 250, 30);

fill(0, 0, 0);
ellipse(325, 245, 19);

// höger öga
fill(60, 100, 130);
ellipse(430, 250, 30);

fill(0, 0, 0);
ellipse(430, 245, 19);
pop();

noStroke();
fill(255, 255, 255);
ellipse(322, 234, 10);

fill(255, 255, 255);
ellipse(427, 234, 10);

// läppar
push();
translate(27, -25);
noStroke();
fill(200, 110, 90);
ellipse(350, 370, 55, 26);

strokeWeight(0.5);
stroke(0, 0, 0);
beginShape();
vertex(323, 369);
bezierVertex(350, 372, 350, 372, 378, 369);
endShape();

noStroke();
fill(130, 170, 200);
triangle(350, 362, 370, 352, 330, 352);
pop();

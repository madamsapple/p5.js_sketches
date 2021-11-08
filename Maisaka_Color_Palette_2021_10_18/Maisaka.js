let maisaka;

function preload() {
  maisaka = loadImage('Maisaka.jpg')
}

function setup() {
  createCanvas(500, 500);
    
}

function draw() {
  background("white");
  
  
  
  noStroke()
  
  fill("#26798C")
  rect(75, 110, 335, 335)
  
  fill("#F2B950")
  rect(100, 152, 285, 285)
  
  fill("#F2884B")
  rect(123, 190, 240, 240)
  
  fill("#F2AB91")
  rect(146, 228, 195, 195)
  
  fill("#F25050")
  rect(169, 266, 150, 150)
  
  image(maisaka, 200, 280, 88.7, 131)
  
}
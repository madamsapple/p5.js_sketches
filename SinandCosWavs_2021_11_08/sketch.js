  x1 = -50
  y1= -100
angle = 0

function setup() {
  createCanvas(480, 470, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  
  
  for (var x = 0; x < 134; x += 10){
    
    line(-200, x + 0.009*sin(mouseX), 200, 100*sin(mouseX))
    rotateZ(angle)
  }
  
  for (var x = 0; x < 134; x += 10){
   
    line(-200, x + 0.09*sin(mouseX), 300, 50*cos(mouseY))
    rotateZ(angle)
  }
  
    for (var x = 0; x < 134; x += 10){
      
      stroke("#F0D89C")
      strokeWeight(1.5*cos(x))
      
      rotateZ(angle)
      angle += 0.007
   
    line(-300, x - 116+  0.9*sin(mouseX), 200, 120*cos(mouseY))
  }
  
 
  strokeWeight(0)
  noFill()

  
  x1 += 2
  y1 += 2
  
  
  
}
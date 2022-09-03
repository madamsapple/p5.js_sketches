let angle = 0
let newFont;
  
function preload() {
  newFont = loadFont('Courier New.otf');
}

function setup() {
  createCanvas(500, 530, WEBGL);
  img = loadImage("sherbet.gif")
  img2 = loadImage("lava-lamp2_orig.gif")
  text1 = loadImage("text.jpg")
}

function draw() {
  background(2);
  
  fill(mouseY/2,0,0)
  textFont(newFont)
  textSize(15)
  text('the sherbet is', -220, 10)
  textSize(13)
  text('evolving into', -220, 22)
  textSize(20)
  
  fill(mouseY*10, -mouseX/2, 3)
  text('a cash grab:', -220, 38)
  
  fill(mouseY/2.6,0,40)
  textSize(14)
  text('essentially they', -220, 50)
  text('sell sugar,', -220, 62)
  
  textSize(15)
  text('in  a somewhat', -220, 75)
  textSize(17)
  
  text('developed', -220, 89)
  
  text('formula', -220, 103)
  textSize(13)
  
  fill(mouseX*0+255)
  text('to theMASSESwhilst' , -222, 115)
  
  fill(25,0,60)
  fill(mouseX*2,mouseX/2,mouseX*1.50)
  text('masking it as an', -220, 126)
  text('"energy booster', -220, 137)
  text('drink"', -220, 150)
  
  textSize(10)
  text('endowed with herbs,', -220, 160);
  
  text('vegetables,', -220, 170)
  text('and', -220, 180)
  text('fruits.', -220, 190)
  text('fruits.', -220, 190)
  text('fruits.', -220, 190)
  
  textSize(25)
  fill(255)
  issue = text("ISSUE:", -37, -177)
  
  textSize(15)
  
  text("'exploiting", 95, 10)
  fill(mouseX*2,mouseX/2,mouseX*1.50)
  text("people's palettes'", 76, 23)
  text("tastebuds tantalized", 67, 36)
  fill(255, 69, 70)
  text("by the sugar", 77, 47)
  text("sugar", 139, 47)
  text("sugar", 141, 47)
  textSize(19)
  text("RUSH", 185, 50.6)
  text("RUSH", 185, 51.6)
  text("RUSH", 185, 53)
  
  textSize(12)
  fill(mouseX, mouseX/2, 90)
  text("plastic bottle packaging", 75, 70)
  fill(255)
  text("single-use", 79, 80)
  text("plastic-sachets sold", 85, 90)
  fill(mouseX, mouseX/2, 90)
  text("targeted towards MIN", 79, 100)
  text('wage', 200, 109)
  text('labor', 197, 119)
  
  textSize(14)
  text("pries on the poor", 91, 133)
  text("uneducated lot:", 93, 144)
  text("Mr.Ahmed(rep)says:", 97.7, 156)
  text('"The people in', 100, 172)
  text("India in fact want", 96, 184)
  text("sugar. It’s only", 90, 196)
  text("the metros that", 76, 208)
  fill(255)
  text('knows what diabetes is."', 45, 221)
  text('knows what diabetes is."', 45, 221)
  text('knows what diabetes is."', 45, 221)
  
  ambientLight(226)
  
  //rotateZ(angle)
  //rotateX(angle)
  rotateY(angle)
  
  angle+=0.009
  
  noStroke()
  texture(img2)
  c2 = cone(90, -300)
  
  texture(img2)
  noStroke()
  cylinder(25, 300, 260)
  
  stroke(255)
  
  sphere(44, 24)
  sphere(44, 23)
  
 //rotateZ(angle)
  //rotateX(angle)
  rotateY(angle*1.5)
  
  angle+=0.009
  
  noStroke()
  texture(img2)
  c3 = cone(90, -300)
  
  texture(img2)
  noStroke()
  cylinder(25, 300, 260)
  
  texture(img)
  c2 = cone(89, -293, 8)
  
  stroke(255)
  
  sphere(4, 24)
  sphere(4, 23) 
  
}
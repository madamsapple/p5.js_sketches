let redgap = 30

let linecount = 400
let bluegap = 20

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background("black");
  
  //following disc
  strokeWeight(mouseY*0.02)
  stroke(120)
  ellipse(mouseX - 40, mouseY+50, 10, 25)
  
  
  
  //perlin noise
  noFill()
  beginShape()
  var xoff = -2000
  
  for (var x = -20; x < width/2 -redgap;       x++)
    
    {
      
      //color range of noise
      stroke(0, 32, random(0, 255))
      strokeWeight(1)
      var y = noise(xoff)*height*0.005
      
      vertex(x,random(y*height))
      xoff += 90
    }
      
  endShape()
  
  //random display speed for lines 
  frameRate(random(10,24))

  //the two bars in the centre
  stroke(50, 80, 156, random(400))
  strokeWeight(3)
  line(width/2 -redgap, 0, width/2 - redgap,   height)
  stroke(random(250))
  line(width/2 +redgap, 0, width/2 + redgap,   height)
  

  //setting up the disappearance of        expanding lines
  if(mouseX > width/2 - redgap && mouseX <     width/2 + redgap)
    {
      print("Inside the red bars")

    }
  else
    {
      print("Outside the red bars")
      
      //creating all expanding lines through loop
      for (var i = -linecount/2; i <               linecount; i += bluegap)
        {
          
          strokeWeight(0.5)
          //ignore
          /*let colors = ["#D9C8A9", "#591C0E", "#BF9A84", "#BF6B63", "#BF5E5E", "#BF9A84", "#A61731", "#5B89A6", "#D9D7BA", "#D99748", "#D99748", "#A62E2E"]*/
          
          stroke(99, random(8, 239), 240)
          line(0, random(i)*5, width/2,               height/2)
          
          strokeWeight(1)
          stroke("white")
          line(width, i*3, width/2,                   height/2)
        }
      
    }

}
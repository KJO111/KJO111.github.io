let hard, normal, expert, legendary, divine, onlyoneway;
let z;
let t = 0;
let timer = 55;
let bubbles = []

class Bubble {
 	constructor() {
   this.x = random(400);
   this.y = random(400);
   this.xspeed = 6;
   this.yspeed = 6;
   this.size = 25;
   this.width = width;
   this.height = height;
	}
  normal() {
    this.xspeed = 6;
    this.yspeed = 6;
  }
  hard() {
    this.xspeed = 9;
    this.yspeed = 9;
  }
  expert() {
    this.xspeed = 11;
    this.yspeed = 11;
  }
  legendary() {
    this.xspeed = 13.5;
    this.yspeed = 13.5;
  }
  divine() {
    this.xspeed = 14.5;
    this.yspeed = 14.5;
  }
  
  slowd() {
    this.xspeed = 2;
    this.yspeed = 2;
  }
  lmao() {
    this.xspeed = 20;
    this.yspeed = 20;
  }
  clicked(x = mouseX, y = mouseY) {
    let d = dist(x, y, this.x, this.y);
    if(d <= this.size) {
      t += 1
      sound.play()
      
   }
  }
  newvl() {
    this.x = random(400)
    this.y = random(400)
  }
  move() {
    this.x += this.xspeed
    this.y += this.yspeed
  }
  
  values(){
  if (this.x > this.width || this.x < 0) {
   this.xspeed = this.xspeed * -1
  }
  if (this.y > this.height || this.y < 0) {
    this.yspeed = this.yspeed * -1
  }  
}
  
  draw(){
    stroke(255);
    strokeWeight(4);
    fill(220);
    ellipse(this.x, this.y, this.size, this.size)
    
  }
}

function preload() {
  gmov = loadImage("GAME OVER.jpg")
  instr = loadImage("red bg.jpg")
  win = loadImage("djt_win.jpg")
}


function setup() {
  createCanvas(400, 400);
  z = 5;
  sound = loadSound('Pop Banner-SoundBible.com-641783855.mp3')
  
  normal = createButton('Normal')
  normal.mousePressed(normalmodes)
  
  
  hard = createButton('Hard')
  hard.mousePressed(hardmodes)
  
  expert = createButton('Expert')
  expert.mousePressed(expertmodes)
  
  legendary = createButton('Legendary')
  legendary.mousePressed(legendarymodes)
  
  divine = createButton('Divine')
  divine.mousePressed(divinemodes)
  
  onlyoneway = createButton('You aint beating this')
  onlyoneway.mousePressed(lmao)
  
  for (var x = 0; x <= z; x++) {
   bubbles[x] = new Bubble()
    
  }

  
}


function draw() {
  background(180);
  if(frameCount % 60 == 0 && timer > 0) {
    timer --;
    }
  textSize(20)
  text("Time Remaining:" + timer, 220, 395);
  if(timer > 45) {
    image(instr, 0, 0, 400, 400)
    fill(255)
    textFont('Georgia')
    text("Catch em' by Jack Anderer-McClelland", 20, 20)
    text('The object of the game is to click ' + z + ' of the', 20, 80)
    text('orbs before the timer reaches 0!', 20, 100)
    text('See if you can find the easter egg!', 45, 150)
    text('Select a difficulty below!', 85, 200)
    
    
  }
  
  if(timer == 48) {
    text('Starting in 3', 140, 250)
  }
  if(timer == 47) {
    text('Starting in 2', 140, 250)
  }
  if(timer == 46) {
    text('Starting in 1', 140, 250)
  }
  
  if(timer == 0 && t < z) {
    image(gmov, 0, 0, 400, 400)
  }
  if(t >= z){
     image(win, 0, 0, 400, 400)
     }
  
for (var x = 0; x <= z; x++) {
  if(timer > 0 && timer <= 45 && t < z) {
   bubbles[x].move()
   bubbles[x].values()
   bubbles[x].draw()
   
    
    
   textSize(20)
   strokeWeight(2);
   stroke(255)
   fill(0)
   text("Score:" + t, 5, 395)
    
  }
  //easter egg
    if(mouseButton == CENTER && mouseIsPressed && onlyoneway.mousePressed) {
      bubbles[x].slowd()
  } 
  
  }

  
}


function mousePressed() {
  for(var x = 0; x < z; x++) {
    bubbles[x].clicked()
    bubbles[x].newvl()
     
       }
  
}
function normalmodes() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].normal()
  }
}
function hardmodes() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].hard()
  }
}
function expertmodes() {
  for(let i = 0; i < bubbles.length; i++) {
   bubbles[i].expert()
  }
}
function legendarymodes() {
  for(let i = 0; i < bubbles.length; i++) {
   bubbles[i].legendary()
  }

}
function divinemodes() {
  for(let i = 0; i < bubbles.length; i++) {
   bubbles[i].divine()
  }
}
function lmao() {
  for(let i = 0; i < bubbles.length; i++) {
   bubbles[i].lmao()
  }
}
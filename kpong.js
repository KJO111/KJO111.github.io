// Welcome to Pong! Click the tab to the right and refresh the page to play!
let s=700
let p1 = s/2 
let p2 = s/2
let gamerunning=true
let r=1/150
let P
let Winner=-1
function setup() {
  createCanvas(s,s)
  P=new Pong()
}

class Pong{
  constructor(){
  this.vel=s/300
  this.rad=s/40
  this.x=s/2
  this.y=s/2
  this.c=s/1000
  this.ang=PI*random(-1,1)/5+(Math.sign(random(-1,1))+1)*PI/2
  }
  move(){
  this.x+=this.vel*cos(this.ang)
  this.y+=this.vel*sin(this.ang)
  if (this.y>=s-this.rad){
  this.ang=-this.ang
  this.vel+=this.c
  }
  if (this.y<=this.rad){
  this.ang=-this.ang
  this.vel+=this.c
  }
  if (this.x>=39*s/40-3*s/70-this.rad){
  if(p2+s/4>=this.y && this.y>=p2){
    this.ang=PI-this.ang
    this.vel+=this.c
  }
  }

  if (this.x>=39*s/40-3*s/70+this.rad){
    gamerunning=false
    Winner=2
  }

    
  if (this.x<=s/40+3*s/70-this.rad){
    gamerunning=false
    Winner=1
  }
  if (this.x<=s/40+3*s/70+this.rad){
  if(p1+s/4>=this.y&& this.y>=p1){
    this.ang=PI-this.ang
    this.vel+=this.c

  }
  }
  ellipse(this.x,this.y,2*this.rad)
  }
}

function draw() {
  background(0)
  if (gamerunning){
    P.move()
    rect(3*s/70,p1,s/40, s/4)
    rect(39*s/40-3*s/70,p2,s/40, s/4)
    if (keyIsDown(UP_ARROW)){
    p2-=s*r
    }
    if (keyIsDown(DOWN_ARROW)){
    p2+=s*r
    }
    if (keyIsDown(87)){
    p1-=s*r
    }
    if (keyIsDown(83)){
    p1+=s*r
    }
  }
  else{
  background(0)
  if (Winner==1){
  fill(200,200,200)
  text("Player 1 won!",s/2,s/2)
  }
  if (Winner==2){
  text("Player 2 won!",s/2,s/2)
  }
  }
}


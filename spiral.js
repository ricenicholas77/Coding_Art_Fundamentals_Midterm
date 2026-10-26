class spiral{
    constructor(){
        this.xDir = random(-1,1); 
        this.yDir = random(-1,1); 
        this.angle1 = 0;
        this.angle2 = 15;
        this.angle3 = 10;
        this.rotSpeed1 = random(2,9);
        this.rotSpeed2 = random(75,175);
        this.radius = 0;
        this.colors =['#FF6496','#638BFF','#63FF74','#FFD463'];
        this.t_max = floor(random(10,50));
        this.i_max = floor(random(10,50));
    }

offClick(){
    this.radius = 0;
    this.angle1 = 0;
    this.angle2 = 15;
    this.angle3 = 10;

    this.t_max = floor(random(10,50));
    this.i_max = floor(random(10,50));  
}

update(){
  this.angle1 += this.rotSpeed1;
  this.angle2 += this.rotSpeed2;
  this.angle3 += this.rotSpeed2;
  this.x+= this.xDir;
  this.y+= this.yDir;
}

display(t_index,i_index){
  push();
    scale(map(sin(0.002),-1,1,0.0001,1.0001)); // Zoom in slightly
    let colorIndex = (t_index+i_index) % this.colors.length; //gets index for colors
    let baseColor = color(this.colors[colorIndex]);
    fill(red(baseColor),green(baseColor), blue(baseColor),155);
    noStroke();
    rect(this.x*t_index,this.y*t_index, 40, 40);
  pop();
}

getPos(t_index){
  translate(mouseX+t_index, mouseY+t_index);
          
  this.radius = this.angle1 * 0.0002; // Controls how fast the spiral expands
  this.x = this.radius * cos(this.angle1);
  this.y = this.radius * sin(this.angle1);
  rotate(this.angle2);
  scale(map(sin(0.2), -1,1, 0.01, 1.001));
  rotate(this.angle3);
}

onClick(){
  blendMode(BLEND);
  print(this.t_max,this.i_max);
  for(let t=0; t < this.t_max; t++){  
    for(let i =0; i < this.i_max; i++){
      push();
        this.getPos(t);
        this.display(t,i);
      pop();
      this.update();
      }
    }
}
}

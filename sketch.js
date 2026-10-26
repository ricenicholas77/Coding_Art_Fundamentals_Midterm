let spirals = [];
let numSpirals = 2;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for(let i = 0; i < numSpirals; i++){
    spirals.push(new spiral());
  }
}

function draw() {
  background(255,253,246,50);
  for(let i = 0; i < numSpirals; i++){
    if (mouseIsPressed){
      spirals[i].onClick();
    }
    else {
      spirals[i].offClick();
    }
  }
}

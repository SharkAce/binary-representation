let num = 0
function setup(){
  createCanvas(1400, 800)
  frameRate(2)
  textSize(20)
}
function draw(){
  let bin = num.toString(2).split('').reverse()
  background(54)
  for (let i = 0; i<15; i++){
    bin[i] == '1' ? fill(200,10,10) : fill(255)
    circle(20+(i*40), 70, 20)
    fill(255)
    bin[i] == '1' ? text('1', 15+(i*40), 100) : text('0', 15+(i*40), 100)
  }
    text('decimal: '+num, 15, 130)
    num ++
}

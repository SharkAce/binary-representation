let num = 0
function setup(){
  createCanvas(1400, 800)
  frameRate(2)
  textSize(20)
}
function draw(){
  let realBin = num.toString(2)
  let bin = num.toString(2).split('').reverse()
  let hex = num.toString(16)
  background(54)
  for (let i = 0; i<15; i++){
    bin[i] == '1' ? fill(200,10,10) : fill(255)
    circle(20+(i*40), 70, 20)
    fill(255)
    bin[i] == '1' ? text('1', 15+(i*40), 100) : text('0', 15+(i*40), 100)
  }
    text('hexadecimal:     '+hex, 15, 160)
    text('decimal:             '+num, 15, 130)
    text('binary:               '+realBin, 15, 190)
    num ++
}

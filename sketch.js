let num = 0

function setup() {
  createCanvas(1400, 800)
  frameRate(1)
  textSize(20)
}

function draw() {

  background(54)

  // Generate binary digit
  let realBin = num.toString(2)
  let bin = num.toString(2).split('').reverse();
  let hex = num.toString(16)

  for (let i = 0; i < 15; i++) {
    let index = 14 - i;
    let n = bin[index];

    // Draw circles
    if (n === '1') {
      fill(200, 10, 10)
    } else if (n === '0') {
      fill(0, 100, 10)
    } else {
      fill(255)
    }
    circle(20 + (i * 40), 70, 20)

    // Draw digits
    fill(255)
    if (n === '1') {
      text('1', 15 + (i * 40), 100)
    } else {
      text('0', 15 + (i * 40), 100)
    }
  }
  // Bottome labels
  text('binary:                ' + realBin, 15, 130)
  text('decimal:             ' + num, 15, 190)
  text('hexadecimal:     ' + hex, 15, 160)

  //Increment displayed value
  num++;
}

var x = 0,
    y = 0,
    px = 0,
    py = 0,
    easing = 0.1;
    s = '#ecf0f1'
    parts = 24


function setup() {
    canvas = createCanvas(windowWidth, windowHeight - 50)
    canvas.parent('sketch-holder');
    background('#2c3e50')
    angleMode(DEGREES)
    stroke(255)
}

function draw() {
    translate(width / 2, height / 2)
    if (mouseIsPressed && mouseY > 50) {
        var targetX = mouseX - width / 2,
            targetY = mouseY - height / 2;
        x += (targetX - x) * easing;
        y += (targetY - y) * easing;
        strokeWeight(5);
        stroke(s)
        for (i = 1; i <= parts; i++) {
            push()
            rotate(i * (360 / parts))
            line(x, y, px, py)
            pop()
        }

        px = x;
        py = y;
    }
    
    strokeWeight(10)
    stroke('#e74c3c')
    point(0, 0)
}

function mousePressed() {
    x = mouseX - width / 2;
    y = mouseY - height / 2;
    px = mouseX - width / 2;
    py = mouseY - height / 2;

    return false;
}

function touchStarted(touch) {
    if( touch.touches[0].clientY > 50){
        x = touch.touches[0].clientX - width / 2;
        y = touch.touches[0].clientY - height / 2;
        px = touch.touches[0].clientX - width / 2;
        py = touch.touches[0].clientY - height / 2;
        return false;
    }else{
        return true;
    }

}
  
  
function preload() {
}

function setup()
{
  canvas = createCanvas(600, 600);
  canvas.position(100, 200);
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 600, 600);
  fill(255, 0, 0);
  circle(70, 60, 100, red);
  circle(530, 60, 100, red);
  circle(70, 540, 100, red);
  circle(530, 540, 100, red);
  rect(300, 60, 460, 30, green);
}

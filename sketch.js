var canvas;
var music;
var blueBlock, greenBlock, yellowBlock, pinkBlock
var ball;

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 600);
    edges = createEdgeSprites();

    blueBlock = createSprite(100, 580, 150, 20);
    blueBlock.shapeColor = "blue";

    yellowBlock = createSprite(300, 580, 150, 20);
    yellowBlock.shapeColor = "yellow"

    pinkBlock = createSprite(500, 580, 150, 20);
    pinkBlock.shapeColor = "pink"

    greenBlock = createSprite(700, 580, 150, 20);
    greenBlock.shapeColor = "green";

    ball = createSprite(random(20, 750), 50, 20, 20)
    ball.shapeColor = "white"
    ball.velocityX = 4;
    ball.velocityY = 5;

    music.loop();
}

function draw() {
    background(0);

    ball.bounceOff(edges[0])
    ball.bounceOff(edges[1])
    ball.bounceOff(edges[2])
    ball.bounceOff(edges[3])

    if (blueBlock.isTouching(ball) && ball.bounceOff(blueBlock)) {
        ball.shapeColor = "blue"
    }
    if (pinkBlock.isTouching(ball) && ball.bounceOff(pinkBlock)) {
        ball.shapeColor = "pink"
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if (greenBlock.isTouching(ball) && ball.bounceOff(greenBlock)) {
        ball.shapeColor = "green"
    }
    if (yellowBlock.isTouching(ball) && ball.bounceOff(yellowBlock)) {
        ball.shapeColor = "yellow"
    }

    drawSprites()
}

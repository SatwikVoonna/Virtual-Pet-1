//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogimg, dogimg1
function preload()
{
  //load images here
  dogimg = loadImage(images/dogImg.png);
  dogimg1 = loadImage(images/dogImg1.png);
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite();
  dog.addImage("dog1",dogimg);
  happyDog = createSprite();
  happyDog.addImage("dog2",dogimg1);
}


function draw() {  

  drawSprites();
  //add styles here

}




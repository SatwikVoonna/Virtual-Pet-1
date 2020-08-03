//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogimg, dogimg1
function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite();
  dog.addImage("dog1",dogimg);
  happyDog = createSprite();
  happyDog.addImage("dogHappy",dogimg1);

  foodStock.database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here

}




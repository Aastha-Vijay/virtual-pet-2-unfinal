//Create variables here
var dog, foodS, foodStock, milk;
var dog_normalImage, dog_happyImage;
var database;
var lastFed;
var feedDog, addFood;

function preload()
{
  dog_happyImage = loadImage("images/dogImg1.png");
  dog_normalImage = loadImage("images/dogImg.png");
	//load images here
}

function setup() {
  database = firebase.database();
	createCanvas(1000, 500);
 
  dog = createSprite(250,250);
  dog.addImage(dog_normalImage);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  //rectMode(CENTER);
  

  drawSprites();

  textSize(20);
  fill("cyan");
  stroke("cyan");
  text("Food remaining : "+ foodS, 170, 480);

  textSize(20);
  fill("cyan");
  stroke("cyan");
  text("Note : Press UP_ARROW Key To Feed Drago Milk!",30, 30);
  //add styles here

}
 
function readStock(data){
  foodS = data.val();
}

function add(){
  foodS++
  database.ref('/').update({
  Food:foodS
  })
}

function feed(){
  add(foodS);
  dog.addImage(dog_happyImage);
  database.ref('/').update({
  })
}



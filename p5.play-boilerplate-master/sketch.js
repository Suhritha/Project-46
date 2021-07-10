var ground;
var airLand;
var person;
var landGroup;
var lives=0;

function preload() {
	landImage = loadImage("floating land.png");
    c1 = loadImage("Corona Virus/1.png");
    c2 = loadImage("Corona Virus/2.png");
    c3 = loadImage("Corona Virus/3.png");
    c4 = loadImage("Corona Virus/4.png");
    c5 = loadImage("Corona Virus/5.png");
    c6 = loadImage("Corona Virus/6.png");
    c7 = loadImage("Corona Virus/7.png");
    c8 = loadImage("Corona Virus/8.png");
    c9 = loadImage("Corona Virus/9.png");
    c10 = loadImage("Corona Virus/10.png");

    bgImage = loadImage("Hospital BGs/bg3.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);

  ground = createSprite(100, displayHeight-210, 3000, 20);
  ground.shapeColor="brown";

  person = createSprite(100,displayHeight-250,20,60);
  person.shapeColor="black";
  landGroup = new Group();
  person.debug=true;
}


function draw() {
  background("lightBlue"); 
  textSize(25);
  fill("black");
  text("LIVES : " + lives,50,100);
  ground.velocityX = -3;
  if(ground.x < 0 ){
  	ground.x = 300;
  } 

  if(keyDown("space")){
  	person.velocityY = -10;

  }
    person.velocityY+=0.8;
   

  if(keyDown(LEFT_ARROW)){
  	person.x-=20
  	
  }

  if(keyDown(RIGHT_ARROW)){
  	person.x+=20
  	
  }
if(person.isTouching(landGroup)){
	person.velocityY=0;
person.collide(landGroup);
}

  floatingLand();
  person.collide(ground);
  drawSprites();
}

function floatingLand(){
	if(frameCount %200 === 0){
      airLand= createSprite(displayWidth-100,200,50,10);
      airLand.y = Math.round(random(100,displayHeight-250))
      console.log(airLand.y);
      airLand.shapeColor="blue";
      landGroup.add(airLand);
      airLand.velocityX = -3;
      airLand.addImage(landImage);
      airLand.scale=0.5; 

airLand.depth=person.depth
person.depth=person.depth+1
airLand.debug = true;
airLand.setCollider("circle",0,0,200);

      obstacle = createSprite(100,200,50,30);
      obstacle.x=airLand.x
      obstacle.y=airLand.y
      
      obstacle.velocityX = -3;
      obstacle.scale = 0.09;

      var rand = Math.round(random(1,10));
      switch(rand){
      	case 1 : obstacle.addImage(c1);
      	break
      	case 2 : obstacle.addImage(c2);
      	break
      	case 3 : obstacle.addImage(c3);
      	break
      	case 4 : obstacle.addImage(c4);
      	break
      	case 5 : obstacle.addImage(c5);
      	break
      	case 6 : obstacle.addImage(c6);
      	break
      	case 7 : obstacle.addImage(c7);
      	break
      	case 8 : obstacle.addImage(c8);
      	break
      	case 9 : obstacle.addImage(c9);
      	break
      	case 10 : obstacle.addImage(c10);
      	break
      	default : break
      }
	}
}





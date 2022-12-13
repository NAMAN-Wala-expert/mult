var ball, position;
var database;


function setup(){
  //initialize the database
  database = firebase.database();

  createCanvas(500,500);

  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

  //read operation

  //Step 1: .ref() -> go to the location in database
  var ballLocation = database.ref("ball/position")
  
  //Step 2: read the value from database
  ballLocation.on("value", readPosition)


}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+10);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref("ball/position").set({
    x : ball.x + x,
    y : ball.y + y
  })

}

function readPosition(data){
   var position = data.val()
   ball.x = position.x
   ball.y = position.y
}


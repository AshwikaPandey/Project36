var dog,sadDog,happyDog;

var foodObject
var food

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
   //for the buttons
   var title= createElement('h2')
    title.html("feed the dog")
    title.position(200,50)

    //dog name
    var input=createInput("name the dog")
    input.position(200,200)
    // button to feed
    var buttonfeed= createButton("Feed the Dog")
    buttonfeed.position(200,250)
    buttonfeed.mousePressed(Feed)
    //button to add food
    addFood = createButton("Add food")
    addFood.position(200,300)
    addFood.mousePressed(addFoods)
     
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
   food = new Food(400,20)
    //foodStock.scale= .16
    //console.log(food)
    console.log(foodObject)
}

function draw() {
  background(46,139,87);
    dog.display()
    food.display()
  drawSprites();
}
 
//function to read food Stock


//function to update food stock and last fed time
  function updateFood(){
    foodS++
  database.ref('/').update({
    food: foodS
})
 }

//function to add food in stock
function addFoods(foodS){
  foodS++
   database.ref('/').update({
    food: foodS
   })
   
}
function Feed(){
 dog.addImage(happyDog)
 if(food.getCount()<=0){
   
  food.updateFoodStock(food.getCount()*0)
 }else{
   food.updateFoodStock(food.getCount()*-1) 

 }
}


var canvas, backgroundImage;


var playerCount;
var allPlayers;
var distance = 0;
var database;
var button1,button2,button3,button4;
var position;
var form;


function setup(){
  canvas = createCanvas(1300,500);
  database = firebase.database();
  
  

 
  button1 =createButton('Yes');
  button2 =createButton('1000<');
 
  button3 =createButton('SaiSnehadeep Hospital');
  button4 =createButton('No');
  button5 =createButton('1000');

  button6 =createButton('Kasturba Hospital');
  button7 =createButton('money');
  button8=createButton('food');

  
  button1.position(40,80);
  button2.position(40,250);
  
  button3.position(40,340);
  button4.position(80,80);
  button5.position(90,250);
 
  button6.position(250,340);
  button7.position(50,160);
  button8.position(100,160);

}

function draw(){
  textSize(35);
  text("Would You like to donate ?",40,30);
  text("What would you like to donate ?",40,130);
  text("How Much Would You Like to donate?",40,230);
  textSize(40);
  text("Hospital Funding For Cancer Patients",550,50);
  textSize(35);
  text("Whom would you Like To Donate ?",40,330);
  
}

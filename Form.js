class Form {

  constructor() {
    this.input = createInput("Name");
    
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
 
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);


  }
}

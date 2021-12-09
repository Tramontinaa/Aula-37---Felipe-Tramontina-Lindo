class Form {
constructor() {
    this.input = createInput("Digite seu nome")
    this.button = createButton("Play")
    this.greeting = createElement('h3')
}
hide() {
    this.gretting.hide()
    this.button.hide()
    this.input.hide()
}
//*********************p****i****c****l****e****s******************************/
display(){
    var title = createElement('h2')
    title.html("JOGO - Corrida de Carros");
    title.position(90,10);
 
   
    this.input.position(110,160);
    this.button.position(180,200);
 
 
 
 
    this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
 
        player.name = this.input.value();
 
        playerCount += 1
        player.index = playerCount
 
       
        player.update()
        player.updateCount(playerCount);
     
        this.greeting.html("Hello "+ player.name)
        this.greeting.position(110,160)
    });
}
 
 
    }


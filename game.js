class Game {
    constructor() {

    }
    getState() {
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
          gameState = data.val()  
        })
    }
    update(state) {
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
 
 
 
 
    if(gameState ===0){
    player= new Player ();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
    playerCount=playerCountRef.val();
    player.getCount();
       
 }
    form = new Form();
    form.display();
}
}
      
    play(){
        form.hide();
      
        textSize(30);
        text("Game Start",120,100);
      
        Player.getPlayerInfo();
      
        if(allPlayers!==undefined){
          var display_position = 130;
      
          //erro do projeto ; na linha 45 - Corrigido pela prof
      
          for(var plr in allPlayers){
            if(plr==="player"+player.index)
            fill("red")
      
            else
             fill("black");
      
             display_position+=20;
            
             textSize(15);
             text(allPlayers[plr].name+";"+allPlayers[plr].distance,120,display_position);
          }
        }
        //Seta para cima prescionada - Alterado pela cepora
        if(keyIsDown(UP_ARROW) && player.index !== null){
         player.distance +=50
         player.update();
       }
      
      }
     
}
class Game
{
    constructor()
    {

    }
    readGame()
    {
        var gameRef = db.ref('GameState');
        gameRef.on("value", function(data){
            gamestate = data.val();
        })
    }
    updateGame(state)
    {
        db.ref('/').update({
            GameState:state
        })
    }
    startGame()
    {
        if(gamestate == 0)
        {
            player = new Player();
            player.readCount();
            player.readTutorial();
            form = new Form();
            form.display();
           
        }
        player1 = createSprite(displayWidth/2, displayHeight/2, 20, 20)
        player2 = createSprite(displayWidth/2, displayHeight/2 + 50, 20, 20)
        player3 = createSprite(displayWidth/2, displayHeight/2 - 50, 20, 20)
  //      player4 = createSprite(displayWidth/2 - 50, displayHeight/2, 20, 20)
    //    player5 = createSprite(displayWidth/2 - 50,  displayHeight/2 + 50, 20, 20)
  //      player6 = createSprite(displayWidth/2 - 50, displayHeight/2 - 50, 20, 20)
  //      player7 = createSprite(displayWidth/2 + 50, displayHeight/2, 20, 20)
  //      player8 = createSprite(displayWidth/2 + 50,  displayHeight/2 + 50, 20, 20)
  //      player9 = createSprite(displayWidth/2 + 50, displayHeight/2 - 50, 20, 20)
      //  BigCar = [player1, player2, player3, player4, player5, player6, player7, player8, player9];
        BigCar = [player1, player2, player3];

        if(player.index!==null){
            console.log("i am here 1")
            for(var i=0; i<3; i++)
            {
                console.log("i am here 2")
                if ((i+1) == player.index){
                    console.log("i am here 3")
                   player.xpos= Bigcar[i].x;
                   player.ypos= Bigcar[i].y;
                   console.log(player.xpos);
                   console.log(player.ypos);
                   player.updateDetails();
                }
            }
        }
        
      
    //    car1.addImage(car1Img);
    //    car2.addImage(car2Img);
    //    car3.addImage(car3Img);
    //    car4.addImage(car4Img);
     //   BigCar = [car1, car2, car3, car4]
       // BigCar[0]
    }
    play()
    {
        form.hide();
        Player.getplayerinfo();
     //   player.readRank();
        //AllPlayers = JSON --> {Player1:{Name,Distance},Player2:{Name,Distance} ......}
        if(AllPlayers !== undefined){
            background(0);
          //  image(trackImg,0, -displayHeight * 20, displayWidth, displayHeight * 20.5);
            var arrayindex = 0;
      //      var xpos  = 0;
        //      var ypos = 0;
            for(var P in AllPlayers){
          //       ypos = displayHeight/2 - AllPlayers[P].Distance  ;
              BigCar[arrayindex].x = AllPlayers[P].xpos;
              BigCar[arrayindex].y = AllPlayers[P].ypos;
               if(player.index == (arrayindex+1)){
                fill("blue");
          //      ellipse(BigCar[arrayindex].x ,ypos,80, 80);
                camera.position.x = BigCar[arrayindex].x
                camera.position.y = BigCar[arrayindex].y
               
            }              
               
            //P = Player1 ; AllPlayers[P].Name ,AllPlayers[P].Distance
     //       textSize(20);    
      //      text(AllPlayers[P].Name + ": " + AllPlayers[P].Distance, 150, ypos );
      //      ypos = ypos + 50;
                 arrayindex++;
            //     xpos = xpos +200;
            }
        }                     
        if(keyDown("w") && player.index !== null)
        {
          player.ypos -= 20;
          player.updateDetails();
          
        }
        if(keyDown("a") && player.index !== null)
        {
         player.xpos -= 20;
         player.updateDetails();
      
        }
        if(keyDown("s") && player.index !== null)
        {
            player.ypos += 20;
            player.updateDetails();
        }
        if(keyDown("d") && player.index !== null)
        {
            player.xpos += 20;
            player.updateDetails();
        }
            
    }
    endGame()
    {
        textSize(20);
        textFont("Verdana");
        stroke("blue");
        strokeWeight(5);
        fill("red");
        text(player.name + " Your rank is " + player.rank + " what a horrible rank ><", displayWidth/2 - 100, -(displayHeight * 20 ) - 300);
        form.resetButton.show();
    }
     


}
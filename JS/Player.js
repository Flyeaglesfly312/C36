class Player{

    constructor(){



    }
    //reading the data from database 
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("Value", function(date){
            
            playerCount = data.val();

        })

    }

    update(name){
        
        var playerIndex = "Player " + playerCount;
        database.ref(playerIndex).set({

            "name" : name
        })
    }

    updateCount(count){

        database.ref("/").update({

            "playerCount" : count

        })


        
    }
}
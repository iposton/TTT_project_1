angular
	.module('tttApp')
	.factory('PlayerFactory', PlayerFactory);

	PlayerFactory.$inject = ['$firebase'];

	function PlayerFactory($firebase){

		// var Player_1 = "X";
	 //    var Player_2 = "O";

     

	    // this.turns = turns;

// Player_1 clicks and X appears then Player_2 clicks and "O" appears 

		// function pickTile(tile) {
		// 	    	console.log("inside pick tile")
		// 	        // var sync = new Firebase("https://playercount.firebaseio.com/players");
		// 	        // var player = $firebase(sync).$asObject();

		// 	        // player.turns = 0;
			        
		// 	        console.log("NOT LOADED " + player.turns);

		// 	        player.$loaded(function() {
		// 	        	console.log("LOADED! " + player.turns)
		// 	        	player.turns++;
		// 	        	player.$save();
		// 	        })

		// 	            player.turns += 1;
		// 	            player.$save();

		// 	            if (tile.player === "") {
		// 	                if (turns % 2 === 0) {
		// 	                    // tile.player = 1;
		// 	                    tiles.player = "player_X"
		// 	                    self.tiles.$save();
		// 	                    console.log(player);
		// 	                    winner();
		// 	                }
		// 	                else {
		// 	                    tiles.player = 2;
		// 	                    tiles.player = "Player_O";
		// 	                    self.tiles.$save(tiles);
		// 	                    console.log(player);
		// 	                    winner();
		// 	                }
		// 	            }
		// 	            else {
		// 	                window.alert("Pick another!");
		// 	            }
  //   	}

  //   			// winning logic here
	 // tile.winningCombos = new Array();
	 // tile.empty = new Array();

		 function winningCombos() { [ 

		 	if(self.gameboard[0] == self.gameboard[1] && self.gameboard[1] == self.gameboard[2]) ||

			  (self.gameboard[3] == self.gameboard[4] && self.gameboard[4] == self.gameboard[5]) ||

		      (self.gameboard[6] == self.gameboard[7] && self.gameboard[7] == self.gameboard[8]) || 

		      (self.gameboard[0] == self.gameboard[3] && self.gameboard[3] == self.gameboard[6])|| 

		      (self.gameboard[1] == self.gameboard[4] && self.gameboard[4] == self.gameboard[7]) || 

		      (self.gameboard[2] == self.gameboard[5] && self.gameboard[5] == self.gameboard[8]) ||

		      (self.gameboard[0] == self.gameboard[4] && self.gameboard[4] == self.gameboard[8]) || 

		      (self.gameboard[2] == self.gameboard[4] && self.gameboard[4] == self.gameboard[6]) 
		      { else if(moves == 9) } { else moves += 1 } ] };

		      return "you won dog!";



		// 	// [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


		// 	for( var 1 = 0; 1<= 8; 1++) {

		// 		tile.winningCombos[1] = false;
		// 	    tile.empty[1] = '';

		 	//}

		return PlayerFactory;

			}  







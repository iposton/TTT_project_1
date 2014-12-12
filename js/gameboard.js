angular
	.module('tttApp')
	.factory('GameBoardFactory', GameBoardFactory);

GameBoardFactory.$inject = ['$firebase'];

function GameBoardFactory($firebase){

	var TILE_STATES = ['unselected-tile', 'player_X', 'player_O'];
	// var Player_1 = "X"
	// var Player_2 = "O"

	// var symbol = "X";
	// var symbol = "O";

	// var this = self;


	

	var GameBoard = function(numTiles) {


		this.numTiles = numTiles;

		this.tiles = new Array( numTiles );

		this.toggleTile = toggleTile;
		

		this.getTileState = getTileState;

		this.board_structure = board_structure;

		console.log("inside controller")
			        


			         var sync = new Firebase("https://playercount.firebaseio.com/board");
			         var tiles = $firebase(sync).$asArray();

			         var sync = new Firebase("https://playercount.firebaseio.com/board/players");
			         var player = $firebase(sync).$asObject();


	// this.board_structure.$loaded().then(function)
	// this.players.$loaded().then(function)


	var board_structure = [

		{ cell: 0, tile_state: 0 },
		{ cell: 1, tile_state: 1 },
		{ cell: 2, tile_state: 2 },
		{ cell: 3, tile_state: 3 },
	 	{ cell: 4, tile_state: 4 },
	    { cell: 5, tile_state: 5 },
	 	{ cell: 6, tile_state: 6 },
	 	{ cell: 7, tile_state: 7 },
	 	{ cell: 8, tile_state: 8 },
	    { cell: 9, tile_state: 9 }
		

	 ];

	for (var i = 0; i < board_structure.length; i++) {
			tiles.$add = board_structure[i];
	}


	   tiles.$loaded(function() {
			        	console.log("LOADED! ")
			        	// player.turns++;
			        	tiles.$save();
			        })

			      


		function toggleTile(num) {

			//this does this devidied by this and sets it back to zero ng-click
				console.log("inside toggleTile");

				this.tiles[num] = (this.tiles[num] + 1) % TILE_STATES.length;

				var turns = 1;

				// pickTile();

			   


		}

		// function pickTile(tile) {
		// 	    	console.log("inside pick tile")
		// 	        var sync = new Firebase("https://playercount.firebaseio.com/players");
		// 	        var player = $firebase(sync).$asObject();

		// 	        // player.turns = 0;
			        
		// 	        console.log("NOT LOADED " + player.turns);

		// 	        player.$loaded(function() {
		// 	        	console.log("LOADED! " + player.turns)
		// 	        	player.turns++;
		// 	        	player.$save();
		// 	        })

		// 	            // player.turns += 1;
		// 	            // player.$save();

		// 	            // if (tile.owner === "") {
		// 	            //     if (turns % 2 === 0) {
		// 	            //         // tile.player = 1;
		// 	            //         tile.owner = "player_X"
		// 	            //         self.board.$save();
		// 	            //         console.log(tile);
		// 	            //         winner();
		// 	            //     }
		// 	            //     else {
		// 	            //         tile.player = 2;
		// 	            //         // tile.owner = "O";
		// 	            //         self.board.$save(tile);
		// 	            //         console.log(tile);
		// 	            //         winner();
		// 	            //     }
		// 	            // }
		// 	            // else {
		// 	            //     window.alert("Pick another!");
		// 	            // }
  //   	}
	
		function getTileState(num) {

				//if its zero then return selected or unseleceted ng-class

				return TILE_STATES[this.tiles[num]];




			
		}

		// var empty = 0;

		// function checkWin() {


		// 	if(this.player.TILE_STATES == GameBoard.TILE_STATES.empty);

		// 	return false;
		// }


		// // winning logic here
	 // tile.winningCombos = new Array();
	 // tile.empty = new Array();

		// function winningCombos() { [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

		// 	for( var 1 = 0; 1<= 8; 1++);

		// 		tile.winningCombos[1] = false;
		// 	    tile.empty[1] = '';

		// 	}

		// 	}



		// } else catsGame 



		for (var i=0; i<this.tiles.length; i++) {
			this.tiles[i] = 0;

		}
	}
	
return GameBoard;


  }






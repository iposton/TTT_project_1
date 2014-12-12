angular
	.module('tttApp')
	.factory('PlayerFactory', PlayerFactory);

	PlayerFactory.$inject = ['$firebase'];

	function PlayerFactory($firebase){


		function pickTile(tile) {
			    	console.log("inside pick tile")
			        // var sync = new Firebase("https://playercount.firebaseio.com/players");
			        // var player = $firebase(sync).$asObject();

			        // player.turns = 0;
			        
			        console.log("NOT LOADED " + player.turns);

			        player.$loaded(function() {
			        	console.log("LOADED! " + player.turns)
			        	player.turns++;
			        	player.$save();
			        })

			            player.turns += 1;
			            player.$save();

			            if (tile.owner === "") {
			                if (turns % 2 === 0) {
			                    // tile.player = 1;
			                    tile.owner = "player_X"
			                    self.board.$save();
			                    console.log(tile);
			                    winner();
			                }
			                else {
			                    tile.player = 2;
			                    // tile.owner = "O";
			                    self.board.$save(tile);
			                    console.log(tile);
			                    winner();
			                }
			            }
			            else {
			                window.alert("Pick another!");
			            }
    	}

    			// winning logic here
	 tile.winningCombos = new Array();
	 tile.empty = new Array();

		function winningCombos() { [ (board[0].cell === board[1].cell === board[2].cell symbol &&) ||
			, [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

			for( var 1 = 0; 1<= 8; 1++);

				tile.winningCombos[1] = false;
			    tile.empty[1] = '';

			}

			}  
	
return PlayerFactory;





}
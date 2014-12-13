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

	// var moves = 1;

	// gameover = false;

	// var empty = true;




	

	var GameBoard = function(numTiles) {
         var self = this;

		 self.numTiles = numTiles;

		 // this.tiles = new Array( numTiles );

		  // this.tiles = tiles;

		 self.toggleTile = toggleTile;
		
		 self.gameboard = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		 

		 self.firstTurn = true;

		 self.getTileState = getTileState;

		 // self.owin = owin;

	

			      


		function toggleTile(num) {

			//this does this devidied by this and sets it back to zero ng-click
				console.log("inside toggleTile");

				

				if( self.gameboard[num] === 0){

					self.gameboard[num] = (self.gameboard[num] + 1) % TILE_STATES.length;
					if( self.firstTurn ) {
						self.gameboard[num] = 1;
					}
					else {

						self.gameboard[num] = 2;


				        }

				    self.firstTurn = !self.firstTurn;

				    return winningCombos();  
				}

				 function winningCombos() {  
				 	console.log("winning"); 

				  	if((self.gameboard[0] === 2 && self.gameboard[1] === 2 && self.gameboard[2]) ||
				  	  (self.gameboard[3] === 2 && self.gameboard[4] === 2 && self.gameboard[5]) ||
				  	(self.gameboard[6] === 2 && self.gameboard[7] === 2 && self.gameboard[8]) ||
				  	(self.gameboard[0] === 2 && self.gameboard[3] === 2 && self.gameboard[6]) ||
				  	(self.gameboard[1] === 2 && self.gameboard[4] === 2 && self.gameboard[7]) ||
				  	(self.gameboard[2] === 2 && self.gameboard[5] === 2 && self.gameboard[8]) ||
				  	(self.gameboard[0] === 2 && self.gameboard[4] === 2 && self.gameboard[8]) ||
				  	(self.gameboard[2] === 2 && self.gameboard[4] === 2 && self.gameboard[6])) {

				  		alert("Player X you won!");

				  	} else if ((self.gameboard[0] === 1 && self.gameboard[1] === 1 && self.gameboard[2]) ||
				  	  (self.gameboard[3] === 1 && self.gameboard[4] === 1 && self.gameboard[5]) ||
				  	(self.gameboard[6] === 1 && self.gameboard[7] === 1 && self.gameboard[8]) ||
				  	(self.gameboard[0] === 1 && self.gameboard[3] === 1 && self.gameboard[6]) ||
				  	(self.gameboard[1] === 1 && self.gameboard[4] === 1 && self.gameboard[7]) ||
				  	(self.gameboard[2] === 1 && self.gameboard[5] === 1 && self.gameboard[8]) ||
				  	(self.gameboard[0] === 1 && self.gameboard[4] === 1 && self.gameboard[8]) ||
				  	(self.gameboard[2] === 1 && self.gameboard[4] === 1 && self.gameboard[6])) {

				  		alert("Player O you won!");

				  	}



				//   		self.gameboard == 9) { 


				//   		self.firstTurn();

				  	 

				 		
				// else if(self.gameboard == 9) { self.firstTurn(); } 

				 // }
				  	}

		 	// else (self.firstTurn += 1)  }



		      


         }

	
		function getTileState(num) {

				//if its zero then return selected or unseleceted ng-class

				return TILE_STATES[self.gameboard[num]];




			
		}

	
	}
	
 	return GameBoard;


  }






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

				 	if(self.gameboard == 1 && self.gameboard == 1) //|| (self.gameboard 1] == self.gameboard[1] ) // ||

					  // self.gameboard[3] == self.gameboard[4] && self.gameboard[4] == self.gameboard[5] ||

				   //    self.gameboard[6] == self.gameboard[7] && self.gameboard[7] == self.gameboard[8] || 

				   //    self.gameboard[0] == self.gameboard[3] && self.gameboard[3] == self.gameboard[6]|| 

				   //    self.gameboard[1] == self.gameboard[4] && self.gameboard[4] == self.gameboard[7] || 

				   //    self.gameboard[2] == self.gameboard[5] && self.gameboard[5] == self.gameboard[8] ||

				   //    self.gameboard[0] == self.gameboard[4] && self.gameboard[4] == self.gameboard[8] || 

				   //    self.gameboard[2] == self.gameboard[4] && self.gameboard[4] == self.gameboard[6]) }

				 	{	owin();
				 	} else if(self.gameboard == 9) { self.firstTurn(); } 

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






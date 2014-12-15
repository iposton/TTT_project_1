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




		     var sync = new Firebase("https://playercount.firebaseio.com/gameboard");
		     var tiles = $firebase(sync).$asArray();
		     
		     
		     

		     for(var i = 0; i < self.numTiles; i++){
		     	tiles.$add(
		     		[i]  
		     	);
		     }

		 // this.tiles = new Array( numTiles );

		  // this.tiles = tiles;

		 self.toggleTile = toggleTile;
		
		 self.gameboard = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		 

		 self.firstTurn = true;

		 self.getTileState = getTileState;

		 self.xplay = [{ playerx: 'X' }];

		 self.count = 0;

		 function countArray() {

            console.log(self.count);
		 	if( self.count < self.gameboard.length ) { self.count++; self.tiles.$add();
		 } else { self.count = 0; }

		}

         
		
			      


		function toggleTile(num) {

			//this does this devidied by this and sets it back to zero ng-click
				console.log("inside toggleTile");
				
				

				if( self.gameboard[num] === 0){

					console.log(self.gameboard[num] + "gameboard num");
					self.gameboard[num] = (self.gameboard[num] + 1) + TILE_STATES.length;
					if( self.firstTurn ) { 
						console.log("first turn at if :" + self.firstTurn);
						 
						  self.oplay = [{ playero: 'O' }];
						//  player X
						self.gameboard[num] = 1;
						self.count++;
						

					}
					else {
						console.log("else should be false :" + self.firstTurn);
						
						  
						// player O
						

						self.gameboard[num] = 2;
						self.count++;
						
						
						


				        }

				    self.firstTurn = !self.firstTurn;
				   
				 

		
                    
				     return winningCombos();
		


				    // return messageFunction(); 
				}

				 function winningCombos() { 


				 	 

				 	self.playerX = 1;

				 	self.playerO = 2;

				 	
					

				 	

				 	
                          // rows
				  	if((self.gameboard[0] === self.playerX && self.gameboard[1] === self.playerX && self.gameboard[2] === self.playerX) ||
				  	  (self.gameboard[3] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[5] === self.playerX) ||
				  	  (self.gameboard[6] === self.playerX && self.gameboard[7] === self.playerX && self.gameboard[8] === self.playerX) ||
				  		//collumns
				  		 
				  	(self.gameboard[0] === self.playerX && self.gameboard[3] === self.playerX && self.gameboard[6] === self.playerX) ||
				  	(self.gameboard[1] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[7] === self.playerX) ||
				  	(self.gameboard[2] === self.playerX && self.gameboard[5] === self.playerX && self.gameboard[8] === self.playerX) ||
				  		//diagnols
				  		
				  	(self.gameboard[0] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[8] === self.playerX) ||
				  	(self.gameboard[2] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[6] === self.playerX)) {
						console.log(self.count);
						 
				  		 self.xwin = [{ messagex: 'Player X you won!' }];
				  		 
				  		 
				  		 
				  		 
				  		 

		    } else if((self.gameboard[0] === self.playerO && self.gameboard[1] === self.playerO && self.gameboard[2] === self.playerO) ||
				  	  (self.gameboard[3] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[5] === self.playerO) ||
				  	(self.gameboard[6] === self.playerO && self.gameboard[7] === self.playerO && self.gameboard[8] === self.playerO) ||

				  	(self.gameboard[0] === self.playerO && self.gameboard[3] === self.playerO && self.gameboard[6] === self.playerO) ||
				  	(self.gameboard[1] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[7] === self.playerO) ||
				  	(self.gameboard[2] === self.playerO && self.gameboard[5] === self.playerO && self.gameboard[8] === self.playerO) ||

				  	(self.gameboard[0] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[8] === self.playerO) ||
				  	(self.gameboard[2] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[6] === self.playerO)) {


		    	        

				  		self.owin = [{ messageo: 'Player O you won!' }];
				  		
				  		
				  		

				  	  } else if(self.count==9) {

				  		 self.tie = [{messagetie: 'tie game!' }];
				  		 gameOver();
				  		 return;
				  		
				  	  }
				  	  


				  	 //  setTimeout( 1000 );


				  	 // console.log("winning");


			
				  	}   //winningCombos function
		 


          }
		      


         

     

	
		function getTileState(num) {

				//if its zero then return selected or unseleceted ng-class

				console.log()
 				console.log(TILE_STATES[self.gameboard[num]]);
				return TILE_STATES[self.gameboard[num]];




			
		}



		// 	for (var i=0; i<self.firstTurn.length; i++) {
		// 	self.firstTurn[i] = 0;

		// }

	
	}


	 	function gameOver(){

				  		self.gameover = gameover;
				  		gameOver();
				  			


				  		if( self.count == 9) {

				  			gameOver();
				  			

				  		} else if (self.gameboard == self.xwin){


				  			gameOver();
				  			
				  		} else if (self.gameboard == self.owin){


				  		    gameOver();
				  			
				  		}
		     for(var i = 0; i < self.numTiles; i++){
		     	tiles.$add(
		     		[i]  
		     	);

		     }



				  	}
	
 	return GameBoard;
 	return gameOver();


  }






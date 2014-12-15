angular
	.module('tttApp')
	.factory('GameBoardFactory', GameBoardFactory);

GameBoardFactory.$inject = ['$firebase'];

function GameBoardFactory($firebase){

	var TILE_STATES = ['unselected-tile', 'player_X', 'player_O'];

	   
	

       var GameBoard = function(numTiles) {

         var self = this;

		 self.numTiles = numTiles;


				    

				      var sync = new Firebase("https://iandingdangdong.firebaseio.com/gameboard");
				      sync.remove();
			     var tiles = $firebase(sync).$asArray();
		     
		     
		     

		     for(var i = 0; i < numTiles; i++){
		     	tiles.$add(
		     		[i]  
		     	);
		     }

		 self.toggleTile = toggleTile;
		
		 self.gameboard = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		 

		 self.firstTurn = true;

		 self.getTileState = getTileState;

		 self.xplay = [{ playerX: 'X' }];
		 self.oplay = [{ playerO: 'O' }]

		 self.count = 0;

		 function countArray() {

            console.log(self.count);

		 	if( self.count < self.gameboard.length ) { 

		 	      self.count++;
		 } else { 

		 	     self.count = 0;

		 	     }

		} // end of count function - counts spaces clicked in the gmaeboard array


         
		
       function toggleTile(num) {

			
				if( self.gameboard[num] === 0) {

					console.log(self.gameboard[num] + "gameboard num");
					self.gameboard[num] = (self.gameboard[num] + 1) + TILE_STATES.length;


					if( self.firstTurn ) { 
						console.log("first turn at if :" + self.firstTurn);
						 
						 
						//  Player X clicks first space
						self.gameboard[num] = 1;
						self.count++;
						

					}
					else {
						console.log("else should be false :" + self.firstTurn);
						
						  
						// Player O clicks
						self.gameboard[num] = 2;
						self.count++;
						
						
				     }

				        self.firstTurn = !self.firstTurn;

   
				 

		
                    
				     return winningCombos();
				     self.gameboard[num].$add( [i] );




				    
				}

	 function winningCombos() { 

                    self.playerX = 1;

				 	self.playerO = 2;

				 	   // Winning combos left to right for X

				  	if((self.gameboard[0] === self.playerX && self.gameboard[1] === self.playerX && self.gameboard[2] === self.playerX) ||

				  	   (self.gameboard[3] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[5] === self.playerX) ||

				  	   (self.gameboard[6] === self.playerX && self.gameboard[7] === self.playerX && self.gameboard[8] === self.playerX) ||
				  	
				  	   // Winning combos top to bottom	 

				  	   (self.gameboard[0] === self.playerX && self.gameboard[3] === self.playerX && self.gameboard[6] === self.playerX) ||

				  	   (self.gameboard[1] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[7] === self.playerX) ||

				  	   (self.gameboard[2] === self.playerX && self.gameboard[5] === self.playerX && self.gameboard[8] === self.playerX) ||
				  	
				  	    // Winning diagonals

				  	   (self.gameboard[0] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[8] === self.playerX) ||

				  	   (self.gameboard[2] === self.playerX && self.gameboard[4] === self.playerX && self.gameboard[6] === self.playerX)) {
						
						                  // message displays in view when X wins

				  		                 self.xwin = [{ messagex: 'Player X Wins!' }];

				  		     // Winning combos left to right for O

				   } else if((self.gameboard[0] === self.playerO && self.gameboard[1] === self.playerO && self.gameboard[2] === self.playerO) ||

				  	         (self.gameboard[3] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[5] === self.playerO) ||

				  	         (self.gameboard[6] === self.playerO && self.gameboard[7] === self.playerO && self.gameboard[8] === self.playerO) ||

				  	         //  Winning combos top to bottom for O	

							 (self.gameboard[0] === self.playerO && self.gameboard[3] === self.playerO && self.gameboard[6] === self.playerO) ||

							 (self.gameboard[1] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[7] === self.playerO) ||

							 (self.gameboard[2] === self.playerO && self.gameboard[5] === self.playerO && self.gameboard[8] === self.playerO) ||

							  // Winning diagonals

							 (self.gameboard[0] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[8] === self.playerO) ||

							 (self.gameboard[2] === self.playerO && self.gameboard[4] === self.playerO && self.gameboard[6] === self.playerO)) {

										// message displays in view when O wins

		    	                        self.owin = [{ messageo: 'Player O Wins!' }];
				  		
				  		
				  		

				  	  } else if(self.count==9) {

									  		 self.tie = [{messagetie: 'Tie Game!' }];
									  		
				  		
				  	  }
				  	  
        }   //end WinningCombos function
		 


        } // end of ToggleTile function
		      


         

     

	
		function getTileState(num) {

				//if its zero then return selected or unseleceted ng-class

				

				
 				
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
		 



				  	}
	
 	return GameBoard;
 	return gameOver();


  }






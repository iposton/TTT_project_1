angular.module('tttApp').factory('GameBoard', GameBoardFunc);

function GameBoardFunc() {

	var TILE_STATES = ['unselected-tile', 'selected-tile', 'red-tile'];

	var GameBoard = function(numTiles) {

		this.numTiles = numTiles;

		this.tiles = new Array( numTiles );

		this.toggleTile = toggleTile;
		

		this.getTileState = getTileState;


		function toggleTile(num) {

			//this does this devidied by this and sets it back to zero ng-click

				this.tiles[num] = (this.tiles[num] + 1) % TILE_STATES.length;


		}

	
			function getTileState(num) {

				//if its zero then return selected or unseleceted ng-class

				return TILE_STATES[this.tiles[num]];


			
		}

		for (var i=0; i<this.tiles.length; i++) {
			this.tiles[i] = 0;

		}
	}
	return GameBoard;

// 	var TicTacToeFactory = function($firebase) {

// // properties of firebase lobby controller stuff
// 	var self = this;

// 	self.playerNumber = -1;

// 	self.room = getLobby();

// 	//run the function only when data is loaded
// 	self.room.$loaded(function(){


// 		console.log(23, "The Room is Loaded.");
// 		console.log(24, self.room.numPlayers);

// 		console.log("ROOM LOADED");


// 		//if numPlayers variable does not exist, initialize it to zero

// 		if ( !self.room.numPlayers ) {
//              self.room.numPlayers = 0;
//              self.room.playerTurn = 0;
//              self.room.$save();
			
// 		}

// 		// set the current players number 
// //then increment the number of players
// 		self.playerNumber = self.room.numPlayers;
// 		self.room.numPlayers += 1;
// 		self.room.$save();
// 	});


// function initialize() {

// 	console.log( this );
// 	angular.extend( self.room, {


// 		name: "Lobby Game",
// 		numPlayers: 5,
// 		coolnessFactor: 100,
// 		wont_be_added: 10
// 	});

// 		self.room.$save();

// }

// 	function getLobby() {
// 		var ref = new Firebase("https://lobbyiansdb.firebaseio.com/room");
// 		var lobby = $firebase(ref).$asObject();
// 		return lobby;
// 	}
// }

//  return TicTacToeFactory;

// // }
// // return GameBoard;

  }


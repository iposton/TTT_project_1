angular.module('tttApp').controller('TicTacToeController', TicTacToeFunc);



//this is a thin controller 

// connect the factory to the controller by $inject 
TicTacToeFunc.$inject = ['GameBoard'];




function TicTacToeFunc(GameBoard) {


	// this.gameName ="Tic, Tac, Toe";

	this.activeBoard = new GameBoard ( 9 );
	

}








// 	TicTacToeFunc.$inject = ['$firebase'];

//    function TicTacToeFunc($firebase) {

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


// 		name: "Lobby Geme",
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

//   }






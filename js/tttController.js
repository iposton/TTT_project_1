angular.module('tttApp').controller('TicTacToeController', TicTacToeFunc);


TicTacToeFunc.$inject = ['GameBoardFactory', '$firebase'];

//this is a thin controller 

// connect the factory to the controller by $inject 





function TicTacToeFunc(GameBoardFactory) {


	

	this.activeBoard = new GameBoardFactory(9);

	
	

}












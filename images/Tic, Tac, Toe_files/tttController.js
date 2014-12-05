angular.module('tttApp').controller('TicTacToeController', TicTacToeFunc);

//this is a thin controller 
// connect the factory to the controller by $inject 
TicTacToeFunc.$inject = ['GameBoard']

function TicTacToeFunc(GameBoard) {


	this.gameName ="Tic, Tac, Toe";

	this.activeBoard = new GameBoard( 3 );
}




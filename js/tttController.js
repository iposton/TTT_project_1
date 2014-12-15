angular.module('tttApp').controller('TicTacToeController', TicTacToeFunc);


TicTacToeFunc.$inject = ['GameBoardFactory', '$firebase'];

// This is a thin controller 

// Connect the factory to the controller by $inject 





function TicTacToeFunc(GameBoardFactory) {

         this.activeBoard = new GameBoardFactory(9);

}












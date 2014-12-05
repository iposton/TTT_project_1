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
}
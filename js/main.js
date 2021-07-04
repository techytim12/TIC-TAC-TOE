import Game from './Game.js';
import GameView from './GameView.js';

var game = new Game();
var gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i)
    gameView.updateBoard(game);
}

ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.games.gamestart'
)
.defines(function(){
	// calling game start from impact-facebook-post.js
	//ig.main( '#canvas', GameStart, 60, 568, 320, 1);
});
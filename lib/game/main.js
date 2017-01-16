ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.island_canon',
	'game.entities.ship_1',
	'game.entities.ship_1_canon_cover',
	'game.entities.ship_1_canon',
	'game.entities.ship_2',
	'game.entities.ship_2_canon_cover',
	'game.entities.ship_2_canon',
	'game.entities.ship_3',
	'game.entities.ship_3_canon_cover',
	'game.entities.ship_3_canon',
	'game.entities.island',
	'game.entities.explosion',
	'game.entities.china',
	'game.entities.hongkong',
	'game.entities.taiwan',
	'game.entities.title_screen_bg',
	
			
	'game.levels.gameplay'
	
)

.defines(function(){

MyGame = ig.Game.extend({
	
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.X, 'shoot');
		ig.input.bind(ig.KEY.MOUSE1, 'mouse1');
		
		
		this.loadLevel(LevelGameplay);
			
	}, 
	
	spawnTimer: new ig.Timer(),
	score: 0,
	
	
	
	update: function() {
		
		if(this.spawnTimer.delta() > 2){
            ig.game.spawnEntity(EntityShip_1, 550, 350);
            this.spawnTimer.reset();
        } else if (this.spawnTimer.delta() > 5){
            ig.game.spawnEntity(EntityShip_2, 550, 350);
            this.spawnTimer.reset();
        } else if (this.spawnTimer.delta() > 10){
            ig.game.spawnEntity(EntityShip_3, 550, 350);
            this.spawnTimer.reset();
        }		
		
		
		// Update all entities and backgroundMaps
		this.parent();
		
		
		// Add your own, additional update code here
	},
	

	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		if(this.font){
        var island = ig.game.getEntitiesByType('EntityIsland')[0];
		this.font.draw('Health: ' + island.health, 80, 20, ig.Font.ALIGN.LEFT);
		}
		
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		if(this.font){
        var ship = ig.game.getEntitiesByType('EntityShip_1')[0];
		this.font.draw('Score: ' + ig.game.score, 80, 40, ig.Font.ALIGN.LEFT);
		}
					
		
		this.font.draw('Arrow Keys, X to shoot', 10, 450, ig.Font.ALIGN.LEFT);
		
		
	},
	
	
	gameOver: function(){
	ig.system.setGame(gameOver);
	},
	
});

gameOver = ig.Game.extend({
	gameOverImage : new ig.Image('media/game_bg.png'),
	init: function(){
	ig.input.bind(ig.KEY.ENTER,'LoadGame');
	},
		
	update:function(){
	if(ig.input.pressed('LoadGame')){
	ig.system.setGame(MyGame);
	}
	},
		
	draw: function(){
	this.parent();
	var font = new ig.Font('media/04b03.font.png');
	this.gameOverImage.draw(0,0);
	font.draw('GAME OVER!',320,200, ig.Font.ALIGN.CENTER);	
	font.draw('Press ENTER to Restart',320, 250, ig.Font.ALIGN.CENTER);
	},
				
});


// Start the Game with 60fps, a resolution of 640x480, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});

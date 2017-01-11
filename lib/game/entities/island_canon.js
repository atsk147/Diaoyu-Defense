ig.module(
    'game.entities.island_canon'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityIsland_canon = ig.Entity.extend({
    
    size: {x:72, y:50},
    offset: {x: 2, y: 4},
	
	maxVel: {x: 500, y: 0},
	friction: {x: 1000, y: 0},
    
    type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/island_canon.png', 72, 50),
    
    flip: false,
	accelGround: 400,
	accelAir: 200,
	jump: 0,
	health: 10,
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'shoot', 0.1, [0,1,2,3,4,5] );
        this.addAnim( 'island_canon', 0.1, [0,1,2,3,4,5] );
        
    },
      
      update: function() {
		
		// move left or right
		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('left') ) {
			this.accel.x = -accel;
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.accel.x = accel;
			this.flip = false;
		}
		else {
			this.accel.x = 0;
		}
		
		
		// shoot
		if( ig.input.pressed('shoot') ) {
			ig.game.spawnEntity( EntityCanon_ball, this.pos.x, this.pos.y, {flip:this.flip} );
            
		}
		
		// set the current animation, based on the player's speed
		if( this.vel.y < 0 ) {
			this.currentAnim = this.anims.island_canon;
		}
		
				
		// move!
		this.parent();
        
        },

});
});



        
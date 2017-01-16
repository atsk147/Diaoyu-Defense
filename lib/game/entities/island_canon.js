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
	
	maxVel: {x: 50, y: 0},
	friction: {x: 2000, y: 0},
    
    type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    sfxHit: new ig.Sound('media/sound/canon.ogg'),
    
    animSheet: new ig.AnimationSheet('media/island_canon.png', 72, 50),
    
    flip: false,
	accelGround: 400,
	accelAir: 200,
	jump: 0,
	health: 10,
    flip: false,
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0,5] );
		this.addAnim( 'shoot', 0.5, [1,2,3,4,5] );
              
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
            this.sfxHit.play();                      
		}
		
		// set the current animation, based on the player's speed
		
		
        if( ig.input.pressed('shoot') ) {
            this.currentAnim = this.anims.shoot;
		} else {
			this.currentAnim = this.anims.idle;
		}
        
        
        
		this.currentAnim.flip.x = this.flip;
		
				
		// move!
		this.parent();
        
        },

});

EntityCanon_ball = ig.Entity.extend({
	size: {x: 12, y: 12},
	offset: {x: -29, y: -17},
	maxVel: {x: 200, y: 2},
	
	// The fraction of force with which this entity bounces back in collisions
	bounciness: 0, 
	    
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
		
	animSheet: new ig.AnimationSheet( 'media/canon_ball.png', 12, 12 ),
	
	bounceCounter: 0,
		
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
		this.vel.y = -50;
		this.addAnim( 'explode', 0.1, [0,1,2,3,4,5] );
	},
		
	handleMovementTrace: function( res ) {
		this.parent( res );
		if( res.collision.x || res.collision.y ) {
			
			//collide once
			this.bounceCounter++;
			if( this.bounceCounter == 1 ) {
				this.kill();
			}
		}
	},
        
    //check against enemy
    check: function( other ) {
		other.receiveDamage( 10, this );
		this.kill();
    },

});

});



        
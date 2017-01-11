ig.module(
    'game.entities.water_droplet'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityWater_droplet = ig.Entity.extend({
	size: {x: 32, y: 24},
	offset: {x: 2, y: 2},
	maxVel: {x: 200, y: 200},
	
	
	// The fraction of force with which this entity bounces back in collisions
	bounciness: 0, 
	
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
		
	animSheet: new ig.AnimationSheet( 'media/water_droplet.png', 32, 24 ),
	
	bounceCounter: 0,
	
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
		this.vel.y = -50;
		this.addAnim( 'idle', 0.1, [0,1,2,3,4,5,6,7] );
	},
		
	handleMovementTrace: function( res ) {
		this.parent( res );
		if( res.collision.x || res.collision.y ) {
			
			// only bounce 3 times
			this.bounceCounter++;
			if( this.bounceCounter > 3 ) {
				this.kill();
			}
		}
	}
});
});
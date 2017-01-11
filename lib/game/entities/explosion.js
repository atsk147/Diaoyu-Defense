ig.module(
    'game.entities.explosion'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityExplosion = ig.Entity.extend({
    
    size: {x:160, y:120},
    type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/explosion.png', 160, 120),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.1, [0,1,2,3,4,5]);
        
        }
        
    });
   
});
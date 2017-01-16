ig.module(
    'game.entities.explosion'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityExplosion = ig.Entity.extend({
    
    size: {x:160, y:120},
    type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE, 
	collides: ig.Entity.COLLIDES.NEVER,
        
    animSheet: new ig.AnimationSheet('media/explosion.png', 160, 120),
    
    init: function(x, y, settings){
        x = x - (this.size.x/2);
        y = y - (this.size.y/2);
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.05, [0,1,2,3,4,5,6], true);
        this.timer = new ig.Timer(0.5);
        },
        
        update: function(){
        //If it has been more than 0.5 seconds then kill this explosion entity.
        if (this.timer.delta() > 0) {
        this.kill();
        }
        this.parent();
        },
        
        
    });

    
   
});
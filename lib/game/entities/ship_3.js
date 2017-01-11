ig.module(
    'game.entities.ship_3'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_3 = ig.Entity.extend({
    
    size: {x:118, y:72},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_3.png', 118, 72),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});


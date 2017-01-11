ig.module(
    'game.entities.ship_1'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_1 = ig.Entity.extend({
    
    size: {x:128, y:74},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_1.png', 128, 74),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});


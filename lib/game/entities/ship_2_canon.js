ig.module(
    'game.entities.ship_2_canon'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_2_canon = ig.Entity.extend({
    
    size: {x:34, y:26},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_2_canon.png', 34, 26),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.1, [0,1,2,3,4,5]);
        
    }
        
});

});
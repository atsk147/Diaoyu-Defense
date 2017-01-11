ig.module(
    'game.entities.ship_2'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_2 = ig.Entity.extend({
    
    size: {x:132, y:96},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_2.png', 132, 96),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});


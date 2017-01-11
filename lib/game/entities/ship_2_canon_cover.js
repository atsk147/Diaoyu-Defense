ig.module(
    'game.entities.ship_2_canon_cover'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_2_canon_cover = ig.Entity.extend({
    
    size: {x:28, y:20},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_2_canon_cover.png', 28, 20),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});
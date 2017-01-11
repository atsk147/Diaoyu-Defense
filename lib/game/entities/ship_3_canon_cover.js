ig.module(
    'game.entities.ship_3_canon_cover'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_3_canon_cover = ig.Entity.extend({
    
    size: {x:22, y:18},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_3_canon_cover.png', 22, 18),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});
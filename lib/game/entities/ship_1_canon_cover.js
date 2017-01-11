ig.module(
    'game.entities.ship_1_canon_cover'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_1_canon_cover = ig.Entity.extend({
    
    size: {x:26, y:20},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_1_canon_cover.png', 26, 20),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 1, [0]);
        
    }
        
});

});
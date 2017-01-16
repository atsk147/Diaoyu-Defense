ig.module(
    'game.entities.ship_1_canon'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityShip_1_canon = ig.Entity.extend({
    
    size: {x:34, y:26},
    type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/ship_1_canon.png', 34, 26),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.1, [0,1,2,3,4,5]);
        
    },
    
    //future use: ig.game.spawnEntity( EntityShip_1_canon, this.pos.x/2 + 245, this.pos.y/2 + 188);
});

});
ig.module(
    'game.entities.island'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityIsland = ig.Entity.extend({
    
    size: {x:320, y:280},
    type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A, 
	collides: ig.Entity.COLLIDES.PASSIVE,
    
    animSheet: new ig.AnimationSheet('media/island.png', 320, 280),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        
        this.addAnim( 'idle', 0.2, [0,1,2,3,4]);
        
    }
        
});

});



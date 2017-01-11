ig.module(
    'game.entities.taiwan'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityTaiwan = ig.Entity.extend({
    
    size: {x:68, y:42},
    collides: ig.Entity.COLLIDES.FIXED,
    
    animSheet: new ig.AnimationSheet('media/taiwan.png', 68, 42),

        
});

});
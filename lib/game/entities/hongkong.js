ig.module(
    'game.entities.hongkong'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityHongkong = ig.Entity.extend({
    
    size: {x:68, y:42},
    collides: ig.Entity.COLLIDES.FIXED,
    
    animSheet: new ig.AnimationSheet('media/hongkong.png', 68, 42),

        
});

});
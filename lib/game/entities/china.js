ig.module(
    'game.entities.china'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityChina = ig.Entity.extend({
    
    size: {x:68, y:42},
    collides: ig.Entity.COLLIDES.FIXED,
    
    animSheet: new ig.AnimationSheet('media/china.png', 68, 42)
    
        
});

});
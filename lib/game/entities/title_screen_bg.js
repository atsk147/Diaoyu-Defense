ig.module(
    'game.entities.title_screen_bg'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityTitle_screen_bg = ig.Entity.extend({
    
    size: {x:640, y:480},
   
        
    animSheet: new ig.AnimationSheet('media/title_screen_bg.png', 640, 480),

        
    init: function(x, y, settings) {
        
        this.addAnim('idle', 1, [0]);
        
        this.parent();        
                        
    },
    
    update: function() {
        
        if (ig.input.pressed('shoot')) {
                ig.game.isTitlescreen=false;
                ig.game.loadLevelDeffered(LevelTitle_screen_bg);
                                
        }
    
        this.parent();
        
        }
    
});

});
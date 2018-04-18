class Game {
    
    Preload() {
        
    }
    
    create() {
        
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        this.game.stage.backgroundColor = "#000000";
        
        this.square = this.game.add.sprite(0, 0, 'square');
        this.music = this.game.add.audio('relaxTraxk');
        this.music.loopFull();
        
      }
    
    update () {
        
            
    
    }
    
}

RocketMaze.Game = new Game();
var tintColour = 0x009799;
var spritesPerSecond = 1;

var hoverSounds = [];

class Game {
    
    Preload() {
        
    }
    
    create() {
        
        this.game.input.mouse.capture = true;
        
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        this.game.stage.backgroundColor = "#000000"
        
        this.music = this.game.add.audio('relaxTrack');
        this.music.loopFull();
        
        for (var i = 0; i < 5; i++) {
            hoverSounds.push(this.game.add.audio('hoverSound' + (i+1)));
            hoverSounds[i].volume = 0.75;
        }
        
    
      }
    
    update() {
        
        for (var i = 0; i < spritesPerSecond; i ++) {
            var square = this.game.add.sprite(Math.random() * this.game.world.width, Math.random() * this.game.world.height, 'box');
            square.scale.setTo(Math.random() * 5);
            square.anchor.setTo(0.5);
            square.tint = tintColour;
            var tween = this.game.add.tween(square).to( { alpha: 0 }, 6000, "Linear", true);
            square.inputEnabled = true;
            square.events.onInputOver.add(this.over, this);
//            square.events.onInputOut.add(this.out, this);
        }
        
        
    
    }
    
    over(sprite) {
        
        sprite.scale.setTo(sprite.scale.x*1.5);
        sprite.tint = 0xffffff;
        hoverSounds[Math.floor(Math.random() * hoverSounds.length)].play();
        
    }
    
    out(sprite) {
        
        sprite.scale.setTo(sprite.scale.x/150*100);
        sprite.tint = tintColour;
    }
}

RocketMaze.Game = new Game();
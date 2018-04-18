var sr = window.devicePixelRatio;

class Preloader {
    
    preload() {
        
         this.wait = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Prepare to relax...");

         this.wait.anchor.set(0.5);
         this.wait.font = 'Arial';
         this.wait.fontSize = 50*sr;
         this.wait.align = 'center';
         this.wait.fill = '#FFFFFF';
         this.wait.stroke = '#FFFFFF';
        
         this.load.image('box', 'assets/square.jpg')
         this.load.audio('relaxTrack', 'assets/MiniLoop.wav')

    }
    
    create() {

        this.state.start('Game');
    }
     
}

RocketMaze.Preloader = new Preloader();

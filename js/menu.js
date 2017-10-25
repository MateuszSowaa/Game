var menuState = {
    
    create: function() {
        game.add.text(100, 100, 'Click space to start', {fill: '#fff'});
        
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('play');
    },
    
};
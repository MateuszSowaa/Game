var winState = {
    create: function() {
        game.add.text(100, 100, 'You win this game', {fill: '#46cb88'});
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.restarGame, this);
    },
    
    restartGame: function () {
        game.state.start('menu');
    }
};
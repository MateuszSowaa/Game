var windowWidth = 1280;
var windowHeight = 768;

var game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO, '');

game.state.add('play', playState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('win', winState);

game.state.start('load');
var ball, lives;
var cursors;
var leftKey;
var scrollback;
var rect, rectGroup;
var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
});
function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //game.stage.backgroundColor = '#eee';
    game.load.image('scrollback', 'img/background-cloud.jpg');
    game.load.image('ball', 'img/ball.png');
    game.load.image('rect','img/rect.png');

}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    //game.physics.arcade.checkCollision.down = false;
    scrollback = game.add.tileSprite(0,0,480,320,'scrollback');
    ballAttrs();
    //rectGroup = this.game.add.group();
    rect = game.add.sprite(150, 155, 'rect');
    rect2 = game.add.sprite(350, 355, 'rect');
    rect3 = game.add.sprite(320, 560, 'rect');
    rect.anchor.set(0.5,1);
}
function update() {
    game.physics.arcade.collide(ball, rect);
    //scrollback.tilePosition.y += 2;
    //ball.x = game.input.x || game.world.width*0.5;
    if (cursors.left.isDown)
    {
      ball.body.velocity.x = -150;
      ball.scale.x = 1;
    }
    else if (cursors.right.isDown)
    {
      ball.body.velocity.x = 150;
      ball.scale.x = -1;
    }
    ball.y += 1;
    rect.y -= 1;
    rect2.y -= 1;
    rect3.y -= 1;

}

function randomRects(){
    // for(var i=0; i<200; i++){
    //     rect = game.add.sprite(150, 155, 'rect');
    // }
}

function ballAttrs(){
    ball = game.add.sprite(5, 5, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.velocity.y = 10;
    ball.body.gravity.y= 9.8;
    //ball.body.collideWorldBounds = true;
    //ball.body.bounce.set(1);
    ball.checkWorldBounds = true;
    ball.outOfBoundsKill = true;
    ball.body.allowGravity = false;

}

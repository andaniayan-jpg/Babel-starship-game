var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");


var scoreText = document.getElementById("scoreText");
var livesText = document.getElementById("hpText");
var levelText = document.getElementById("levelText");
var message = document.getElementById("messages");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", function () {
    resizeCanvas();
});

var keys = {};

var score = 0;
var lives = 5;
var level = 1;

var isPlaying = true;
var gameOver = false;


var ship = {
    x: canvas.width / 2,
    y: canvas.height - 120,
    width: 48,
    height: 48,
    speed: 6
};

var shots = [];
var aliens = [];
var stars = [];

var alienTimer = 0;
var killsInThisLevel = 0;
var neededKills = 8;

var bigEnemy = null;

for (var i = 0; i < 90; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 1 + Math.random() * 2
  });
}

document.addEventListener("keydown", function (event) {
  keys[event.code] = true;

  if (event.code === "Space") {
    makeShot();
  }

  if (event.code === "Enter" && gameOver) {
    restartGame();
  }
});

document.addEventListener("keyup", function (event) {
    keys[event.code] = true;

    if (event.code === "space") {
        makeShot();

    }

    if (event.code === "Enter" && gameOver) {
        restartGame();

    }
});



function updateText() {
    scoreText.innerText = score;
    livesText.innerText = lives;
    levelText.innerText= level;

}









function restartGame() {
    score = 0;
    lives = 5;
    level = 1;
    shots = [];
    aliens = [];
    bigEnemy = null;
    killsInThislevel = 0;
    neededkills = 8;
    isPlaying = true;
    gameOver = false;
    ship.x = canvas.width / 2;
    ship.y = canvas.height - 120;
    message.innerText = "Use arrow keys to move, press space to shoooot.";
}

function makeShot() {
    if (!isPlaying || gameOver) {
        return;
    }

    shots.push({
        x: ship.x - 3,
        y: ship.y - 25,
        width: 6,
        height: 18,
        speed: 9

    });


}

function creatAlien() {
    var size = 46;
    var speed = 1.5 + level * 0.25;


    aliens.push({
        x: Math.random() * (canvas.width - size),
        y: -60,
        width: size,
        height: size,
        speed: speed

    });
}


function creteBigEnemy() {
    bigEnemy = {
        x: canvas.width / 2 -90,
        y: 90,
        width: 180,
        height: 110,
        speed: 3,
        direction: 1,
        health: 15 + level * 3
    };


    message.innerText = "Big alien arrived!";

}





}


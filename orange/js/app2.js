
var Game = Game || {
	
 
};

Game.init = function init() {
  this.highScore   = 0;
  this.difficulty  = 980;
  this.startScreen();
  
};

Game.startScreen = function startScreen() {
  this.board       = $('.board');
  this.startText   = $('<p class="starttext">Welcome to Balloon Burst Level 2. The aim of the game is to pop maximum balloons before they fly away. You will get only 30 seconds, so Hurry Up!!</p>');
  this.startButton = $('<p class="startbutton">Start!</p>');
  this.board.append(this.startText);
  this.board.append(this.startButton);
  this.startButton.on('click', this.startButtonAction.bind(this));
  
};

Game.startButtonAction = function() {
  this.startText.empty();
  this.startButton.empty();
  this.score = 0;
  $('#score').text(`Score: `);
  this.startGame();
  this.missed=0;
  $('#missed').text(`Wrong: `);
  this.timer=0;
  $('#timer').text(`Timer: `);
};


Game.startGame = function() {
  this.gameOver = false;
  this.timeOut  = setTimeout(Game.createBalloon, this.difficulty);
  $(document).on('click', '.balloon', Game.balloonPop);
  this.timeOut2  = setTimeout(Game.createBalloon2, this.difficulty);
  $(document).on('click', '.balloon2', Game.balloonPop2);
  this.timeOut3  = setTimeout(Game.createBalloon3, this.difficulty);
  $(document).on('click', '.balloon3', Game.balloonPop3);  
  this.timeOut4  = setTimeout(Game.createBalloon4, this.difficulty);
  $(document).on('click', '.balloon4', Game.balloonPop4);  
};
		Game.balloonPop = function() {
		$(this).remove();
		$(this).addClass('clicked');
		new Audio('sounds/pop.wav').play();
		Game.score++;
		$('#score').text(`Score: ${Game.score}`);
		Game.levels();
		};
		Game.balloonPop2 = function() {
		$(this).remove();
		$(this).addClass('clicked');
		//new Audio('sounds/wrong.wav').play();
		Game.missed;
		$('#missed').text(`Wrong: ${Game.missed}`);
		Game.score;
		$('#score').text(`Score: ${Game.score}`);
		Game.levels();
		};
		Game.balloonPop3 = function() {
		$(this).remove();
		$(this).addClass('clicked');
		//new Audio('sounds/wrong.wav').play();
		Game.missed;
		$('#missed').text(`Wrong: ${Game.missed}`);
		Game.score;
		$('#score').text(`Score: ${Game.score}`);
		Game.levels();
		};
		Game.balloonPop4 = function() {
		$(this).remove();
		$(this).addClass('clicked');
		//new Audio('sounds/wrong.wav').play();
		Game.missed;
		$('#missed').text(`Wrong: ${Game.missed}`);
		Game.score;
		$('#score').text(`Score: ${Game.score}`);
		Game.levels();
		};
Game.createBalloon = function createBalloon() {
  Game.timeOut       = setTimeout(Game.createBalloon, Game.difficulty);
  Game.timer++;
  $('#timer').text(`Timer: ${Game.timer}`);
  Game.balloonHeight = 100;
  Game.balloon       = $('<div class="balloon animated swing"><img src=images/balloon.png></div>');
  Game.balloon.css('right', Game.randomStartingPosition());
  Game.board.append(Game.balloon);
  Game.balloon.animate({
    top: `-${Game.balloonHeight}px`,
    easing: 'linear'
  }, {
    duration: 2000,
    step: Game.gameOverCheck,
    complete: function() {
      if (Game.timer==30) {
        Game.gameOver = true;
        Game.gameOverMessage();
        //Game.resetButton();
		Game.resetButton1();
      }
    }
  });
};

Game.createBalloon2 = function createBalloon2() {
  Game.timeOut2       = setTimeout(Game.createBalloon2, Game.difficulty);
  Game.balloonHeight = 100;
  Game.balloon2       = $('<div class="balloon2 animated swing"><img src=images/balloon4.png></div>');
  Game.balloon2.css('right', Game.randomStartingPosition());
  Game.board.append(Game.balloon2);
  Game.balloon2.animate({
    top: `-${Game.balloonHeight}px`,
    easing: 'linear'
  }, {
    duration: 2000,
    step: Game.gameOverCheck,
    complete: function() {
      if (Game.timer==30) {
        Game.gameOver = true;
        Game.gameOverMessage();
        //Game.resetButton();
		Game.resetButton1();
      }
    }
  });
};

Game.createBalloon3 = function createBalloon3() {
  Game.timeOut3       = setTimeout(Game.createBalloon3, Game.difficulty);
  Game.balloonHeight = 100;
  Game.balloon3       = $('<div class="balloon3 animated swing"><img src=images/balloon3.png></div>');
  Game.balloon3.css('right', Game.randomStartingPosition());
  Game.board.append(Game.balloon3);
  Game.balloon3.animate({
    top: `-${Game.balloonHeight}px`,
    easing: 'linear'
  }, {
    duration: 2000,
    step: Game.gameOverCheck,
    complete: function() {
      if (Game.timer==30) {
        Game.gameOver = true;
        Game.gameOverMessage();
        //Game.resetButton();
		Game.resetButton1();
      }
    }
  });
};

Game.createBalloon4 = function createBalloon4() {
  Game.timeOut4       = setTimeout(Game.createBalloon4, Game.difficulty);
  Game.balloonHeight = 100;
  Game.balloon4       = $('<div class="balloon4 animated swing"><img src=images/balloon5.png></div>');
  Game.balloon4.css('right', Game.randomStartingPosition());
  Game.board.append(Game.balloon4);
  Game.balloon4.animate({
    top: `-${Game.balloonHeight}px`,
    easing: 'linear'
  }, {
    duration: 2000,
    step: Game.gameOverCheck,
    complete: function() {
      if (Game.timer==30) {
        Game.gameOver = true;
        Game.gameOverMessage();
        //Game.resetButton();
		Game.resetButton1();
      }
    }
  });
};

Game.randomStartingPosition = function randomStartingPosition() 
{
   return Math.floor(Math.random()*(1000-80+1)+80);
	
};

Game.levels = function levels() {
  if (Game.score % 25 === 0) {
    Game.difficulty = Game.difficulty - 100;
  }
};

Game.gameOverCheck = function() {
  if (Game.gameOver === true) {
    $(this).stop();
    $(this).remove();
    Game.score = 0;
    clearInterval(Game.timeOut);
    $(document).off('mouseover', '.balloon', Game.balloonPop);
  }
};

Game.gameOverMessage = function gameOverMessage() {
  this.messageText = $('<p class="gameover">LEVEL 2 COMPLETE!</p>');
  this.board.append(this.messageText);
  if (Game.highScore < Game.score) {
    $('#high-score').text(`High Score: ${Game.score}`);
    Game.highScore = Game.score;
  }
};

/*Game.resetButton = function resetButton() {
  this.resetButton   = $('<p class="reset-button">Play again</p>');
  this.board.append(this.resetButton);
  this.resetButton.on('click', this.resetButtonAction.bind(this));
};

Game.resetButtonAction = function() {
  this.messageText.empty();
  this.resetButton.empty();
  this.resetButton1.empty();
  this.startText.empty();
  this.startButton.empty();
  this.difficulty = 1000;
  this.startScreen();
};*/

Game.resetButton1 = function resetButton1() {
  this.resetButton1   = $('<p class="reset-button1">Next Level</p>');
  this.board.append(this.resetButton1);
  this.resetButton1.on('click', this.resetButton1Action.bind(this));
};


Game.resetButton1Action = function() {
	var b=localStorage.getItem("myValue1");
	localStorage.setItem("myValue1",b);
	var c=Game.highScore;
	localStorage.setItem("myValue2",c);
  window.location.href="indexl3.html";
};

$(Game.init.bind(Game));
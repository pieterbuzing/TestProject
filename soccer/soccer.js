var SPEED = 20; //pixels per second

class Player {
	
	constructor() {
		this.x = this.baseX = 100;
		this.y = this.baseY = 100;
		this.lastUpdate = new Date().getTime();
	}
	
	update() {
		var pos = getMousePos(canvas, evt);
		var now = new Date().getTime();
		
		var elapsed = now - this.lastUpdate;
		var distToMove = elapsed * SPEED / 1000;
		var dx = pos.x - this.x;
		var dy = pos.y - this.y;
		
		
		log("x=" + player.x + ", y=" + player.y + ", dist=" + dist);
	}
}

function log(text) {
	document.getElementById("log").innerHTML = text;
}

function paintScreen() {
	ctx.fillStyle = "#ff0000";
    ctx.fillRect (pos.x, pos.y, 4, 4);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let player = new Player();

function updatePlayer() {
	player.update();
	paintScreen();
	setTimeout(updatePlayer, 100);
}

updatePlayer();

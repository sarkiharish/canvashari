const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
var score = 0;
var player_x = 20;
var player_y = 20;

var base_x = Math.floor(Math.random() * 250);
var base_y = Math.floor(Math.random() * 250);

function step() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'red';
	ctx.fillRect(player_x, player_y, 10, 10);
	ctx.fillStyle = 'orange';
	ctx.fillRect(base_x, base_y, 50, 50);

	if(player_x > base_x && player_y > base_y && player_x < base_x+50 && player_y < base_y+50) {
		score++;
		base_x = Math.floor(Math.random() * 250);
		base_y = Math.floor(Math.random() * 250);
		if(score === 5) {
           	alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
	}
	drawScore();


	requestAnimationFrame(step);
}
requestAnimationFrame(step);

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
function handleInput(event) {
	const key = event.key;
	if(key === 'a') {
		player_x -= 5;
	} else if (key === 'w') {
		player_y -= 5;
	} else if (key === 'd') {
		player_x += 5;
	} else if (key === 's') {
		player_y += 5;
	}
}

document.addEventListener('keypress', handleInput);
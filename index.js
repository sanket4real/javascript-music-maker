window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
	const visual = document.querySelector('.visual');
	const colors = [ '#141b41', '#6442e4', '#4d6fe4', '#32a1e', '#799cd1', '#93beff' ];

	//Lets get going with the sound
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function() {
			sounds[index].currentTime = 0;
			sounds[index].play();

			createBubbles(index);
		});
	});

	//Create a functio that mkaes bubbles
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1s ease';
		bubble.addEventListener('animationend', function() {
			visual.removeChild(this);
		});
	};
});

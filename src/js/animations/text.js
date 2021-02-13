import anime from 'animejs/lib/anime.es.js';

export function revealText(selector, duration) {
	anime({
		targets: selector,
		opacity: 1,
		translateY: [-200, 0],
		duration: duration,
		delay: anime.stagger(300),
		endDelay: 1000,
		loop: true,
	});
}

export function scaleRotate(selector, duration) {
	anime({
		targets: selector,
		scale: [0, 1],
		rotate: 360,
		duration: duration,
	})
}
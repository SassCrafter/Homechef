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

export function scaleRotate(selector, duration, delay = 0) {
	anime({
		targets: selector,
		scale: [0, 1],
		rotate: 360,
		duration: duration,
		delay: delay
	})
}

export function scaleDownToTop(selector, duration, distance, delay = 0) {
	anime({
		targets: selector,
		scale: 3,
		opacity: 0,
		duration: duration,
		delay: delay,
		easing: 'easeInQuad',
	})
}

export function slideLeft(selector, duration, distance, delay = 0) {
	anime({
		targets: selector,
		translateX: -distance,
		duration: duration,
		delay,
		easing: 'easeInQuad',
	})
}

export function slideRight(selector, duration, distance, delay = 0) {
	anime({
		targets: selector,
		translateX: distance,
		duration: duration,
		delay,
		easing: 'easeInQuad',
	})
}
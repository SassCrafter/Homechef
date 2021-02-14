import Component from '../helpers/Component';
import { revealText, scaleRotate, scaleDownToTop } from '../animations/animations';

export default class extends Component {
	constructor(hookId) {
		super(hookId);
		this.duration = 600;
		this.text = 'homechef';
		this.preloader = document.getElementById('main-preloader');
		this.letters = this.preloader.querySelectorAll('.heading span');
		this.animate();
		//this.render();
	}


	animate() {
		revealText(this.letters, 500);
		scaleRotate('.preloader .icon', 2000, 300);
	}



	// Rendering methods for creating preloader if needed

	createIcon(imgPath, className) {
		const icon = this.createElement('img', className, [{name: 'src', value: imgPath}]);
		return icon;
	}

	createHeading() {
		const heading = this.createElement('h2', 'heading');
		this.text.split('').forEach(letter => {
			const span = this.createElement('span');
			span.textContent = letter;
			heading.appendChild(span);
		});
		return heading;
	}

	setupRootEL() {
		const preloaderContent = this.createElement('div', 'preloader__content');
		const iconWrapper = this.createElement('div', 'icon-wrapper');
		iconWrapper.appendChild(this.createIcon('../../images/chef.svg', 'icon'));
		iconWrapper.appendChild(this.createIcon('../../images/star.svg', 'star'));
		iconWrapper.appendChild(this.createIcon('../../images/star.svg', 'star'));
		this.heading = this.createHeading();
		preloaderContent.appendChild(iconWrapper);
		preloaderContent.appendChild(this.heading);
		this.preloader.appendChild(preloaderContent);
	}

	show() {
		this.preloader.classList.remove('hidden');
	}

	hide() {
		//this.preloader.classList.add('hidden');
		scaleDownToTop(this.preloader, this.duration, window.innerWidth + 500);
		setTimeout(() => {
			this.preloader.classList.add('hidden');
		}, this.duration)
	}

	render() {
		this.preloader = this.createRootEl('section', 'preloader hidden');
		this.setupRootEL();
		setTimeout(this.animate, 1000);
	}
}
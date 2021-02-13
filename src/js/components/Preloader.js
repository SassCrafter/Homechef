import Component from '../helpers/Component';
import { revealText, scaleRotate } from '../animations/text';

export default class extends Component {
	constructor(hookId) {
		super(hookId);
		this.text = 'homechef';
		this.render();
	}


	animate() {
		revealText('.preloader .heading span', 500);
		scaleRotate('.preloader .icon', 1000);
	}

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
		this.rootEl.appendChild(preloaderContent);
	}

	show() {
		this.rootEl.classList.remove('hidden');
	}

	hide() {
		this.rootEl.classList.add('hidden');
	}

	render() {
		this.rootEl = this.createRootEl('section', 'preloader hidden');
		this.setupRootEL();
		setTimeout(this.animate, 1000);
	}
}
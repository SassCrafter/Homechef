import Preloader from './components/Preloader';
import '../sass/style.scss';


class App {
	static init() {
		this.preloader = new Preloader('body');
		this.preloader.show();
	}

	static hidePreloader() {
		this.preloader.hide();
	}
}

App.init();

// window.addEventListener('DOMContentLoaded', () => {
// 	console.log('Loaded');
// 	setTimeout(() => {
// 		App.hidePreloader();
// 	}, 2000);
// });

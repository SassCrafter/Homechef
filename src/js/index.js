import Preloader from './components/Preloader';
import { getMealsData, getMealsCategories } from './helpers/dataFunctions';
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

getMealsData();
getMealsCategories();

window.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded');
	setTimeout(() => {
		App.hidePreloader();
	}, 2000);
});

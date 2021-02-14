import Preloader from './components/Preloader';
import CategoryList from './UI/Categories/CategoryList';
import { getMealsData, getMealsCategories } from './helpers/dataFunctions';
import '../sass/style.scss';


export class App {
	static init() {
		this.preloader = new Preloader('body');
		this.preloader.show();
		this.categoryList = new CategoryList('categories');
	}

	static hidePreloader() {
		this.preloader.hide();
	}

	static searchCategory(searchString) {
		getMealsData(searchString);
	}
}

App.init();

// window.addEventListener('DOMContentLoaded', () => {
// 	console.log('Loaded');
// 	setTimeout(() => {
// 		App.hidePreloader();
// 	}, 2000);
// });

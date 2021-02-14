import Preloader from './components/Preloader';
import CategoryList from './UI/Categories/CategoryList';
import RecipeList from './UI/RecipeList';
import Menu from './UI/Menu/Menu';
import { getMealsData, getMealsCategories } from './helpers/dataFunctions';
import '../sass/style.scss';


export class App {
	static init() {
		this.preloader = new Preloader('body');
		this.preloader.show();
		this.categoryList = new CategoryList('categories');
		this.menu = new Menu(this.categoryList);
	}

	static hidePreloader() {
		this.preloader.hide();
	}

	static async searchCategory(searchString) {
		const meals = await getMealsData(searchString);
		this.recipeList = new RecipeList('recipes', meals);
	}

	static clearRecipes() {
		this.recipeList.clear();
	}
}

App.init();

// window.addEventListener('DOMContentLoaded', () => {
// 	console.log('Loaded');
// 	setTimeout(() => {
// 		App.hidePreloader();
// 	}, 2000);
// });

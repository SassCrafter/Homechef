import { slideRight } from '../../animations/animations';
import {App} from '../../index';

export default class {
	constructor(categories) {
		this.categories = categories;
		this.showCategoriesBtn = document.getElementById('show-categories');
		this.showRecipesBtn = document.getElementById('show-recipes');
		this.showCategoriesBtn.addEventListener('click', this.showCategories.bind(this));
	}

	showCategories() {
		const categoriesContainer = this.categories.rootEl.parentElement;
		App.clearRecipes();
		categoriesContainer.classList.remove('slide-left');
		console.log(categoriesContainer);
	}
}
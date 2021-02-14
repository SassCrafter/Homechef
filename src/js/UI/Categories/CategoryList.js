import { App } from '../../index';
import Component from '../../helpers/Component';
import Category from './Category';
import { getMealsCategories, setSearchString } from '../../helpers/dataFunctions';
import { slideLeft } from '../../animations/animations';

export default class extends Component {
	constructor(hookId) {
		super(hookId);
		this.categories = [];
		this.render();
	}

	async fetchCategories() {
			const categoriesArr =  await getMealsCategories();
			categoriesArr.forEach(category => {
				this.categories.push(new Category('categories-container', category));
			});

			// Hide preloader after 2s after loading categories;
			setTimeout(() => {
				App.hidePreloader();
			}, 2000);
	}

	clickHandler(e) {
		const pickedCategory = e.target.closest('.category').dataset.category;
		const searchString = setSearchString(`filter.php?c=${pickedCategory}`);
		App.searchCategory(searchString);
		this.rootEl.parentElement.classList.add('slide-left');
		//slideLeft('#categories', 400, window.innerWidth);
	}

	clear() {
		this.clearRootEl(this.rootEl, '.category');
	}

	render() {
		this.rootEl = this.createRootEl('div', 'categories__container', [{name: 'id', value: 'categories-container'}]);
		this.rootEl.appendChild(this.createHintEl('Pick a category'));
		this.fetchCategories();
		this.rootEl.addEventListener('click', this.clickHandler.bind(this));

	}
}
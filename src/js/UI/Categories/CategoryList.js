import { App } from '../../index';
import Component from '../../helpers/Component';
import Category from './Category';
import { getMealsCategories } from '../../helpers/dataFunctions'

export default class extends Component {
	constructor(hookId) {
		super(hookId);
		this.categories = [];
		this.render();
	}

	async fetchCategories() {
			const categoriesArr =  await getMealsCategories();
			categoriesArr.forEach(category => {
				this.categories.push(new Category('categories', category));
			});

			// Hide preloader after 2s after loading categories;
			setTimeout(() => {
				App.hidePreloader();
			}, 2000);
	}

	render() {
		const rootEl = this.createRootEl('section', 'section categories', [{name: 'id', value: 'categories'}]);
		rootEl.appendChild(this.createHintEl('Pick a category'));
		this.fetchCategories();

	}
}
import Component from '../helpers/Component';
import Recipe from './Recipe';

export default class extends Component {
	constructor(hookId, recipes) {
		super(hookId);
		this.recipesArray = recipes.meals;
		console.log('RecipeList')
		this.recipes = [];
		this.render();
	}

	renderRecipes() {
		this.recipesArray.forEach(recipe => {
			this.recipes.push(new Recipe('recipes-list', recipe));
		});
	}

	clear() {
		this.rootEl.remove();
	}


	render() {
		this.rootEl = this.createRootEl('ul', 'recipes__list', [{name: 'id', value: 'recipes-list'}]);
		this.renderRecipes();
	}

}
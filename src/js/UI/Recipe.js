import Component from '../helpers/Component'


export default class extends Component {
	constructor(hookId, recipeObj) {
		super(hookId);
		this.recipeObj = recipeObj;
		this.render();
	}


	renderCover() {
		const { strMealThumb } = this.recipeObj;
		const coverEl = this.createElement('div', 'recipe__cover');
		const coverImgEl = this.createElement('img', null, [{name: 'src', value: strMealThumb}]);
		coverEl.appendChild(coverImgEl);
		return coverEl;
	}

	renderTitle() {
		const { strMeal } = this.recipeObj;
		const titleEl = this.createElement('h4', 'recipe__title');
		titleEl.textContent = strMeal;
		return titleEl;
	}

	render() {
		const rootEl = this.createRootEl('li', 'recipe');
		rootEl.appendChild(this.renderCover());
		rootEl.appendChild(this.renderTitle());
	}
}



//const recipeEl = this.createElement('li', 'recipe');
//const recipeCoverEl = this.createElement('div', 'recipe__cover');
//const coverImgEl = this.createElement()
import Component from '../../helpers/Component';

export default class extends Component {
	constructor(hookId, categoryObj) {
		super(hookId);
		this.categoryObj = categoryObj;
		this.render();
	}

	renderCover() {
		const {strCategoryThumb, strCategory} = this.categoryObj;
		const coverEl = this.createElement('div', 'category__cover');
		const imgEl = this.createElement('img', null, [{name: 'src', value: strCategoryThumb},
		 {name: 'alt', value: strCategory}]);
		coverEl.appendChild(imgEl);
		return coverEl;
	}

	// Renders title and description
	renderText() {
		const textContainerEl = this.createElement('div', 'category__text');
		const { strCategory, strCategoryDescription } = this.categoryObj;
		const titleEl = this.createElement('h4', 'category__title');
		titleEl.textContent = strCategory;
		const descriptionEl = this.createElement('p', 'category__description');
		descriptionEl.textContent = strCategoryDescription;
		textContainerEl.appendChild(titleEl);
		textContainerEl.appendChild(descriptionEl);
		return textContainerEl;

	}

	render() {
		const rootEl = this.createRootEl('article', 'category', [{name: 'data-category', value: this.categoryObj.strCategory}]);
		rootEl.appendChild(this.renderCover());
		rootEl.appendChild(this.renderText());
		this.renderCover();
	}
}
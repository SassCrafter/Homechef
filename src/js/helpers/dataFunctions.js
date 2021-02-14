const categories = ['breakfast', 'dessert', 'starter', 'side', 'seafood'];
const SEARCH_STRING = 'https://www.themealdb.com/api/json/v1/1/';


const setSearchString = (query) => {
	const searchStr = SEARCH_STRING + query;
	return searchStr;
}


const getMealsCategories = async () => {
	try {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
		if (!response.ok) {
			throw new Error('Could not fetch the categories');
		}
		const data = await response.json();
		const mealsCategories = data.categories.filter(category => categories.includes(category.strCategory.toLowerCase()));
		return mealsCategories.sort((a,b) => b.idCategory - a.idCategory);
	} catch (error) {
		console.log(error);
	}
}

const getMealsData = async (searchString) => {
	try {
		const response = await fetch(searchString);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('error');
	}
}

export { getMealsData, getMealsCategories, setSearchString };
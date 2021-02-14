const categories = ['breakfast', 'dessert', 'starter', 'side', 'seafood'];

const setSearchString = () => {
	console.log("setting");
}


const getMealsCategories = async () => {
	try {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
		if (!response.ok) {
			throw new Error('Could not fetch the categories');
		}
		const data = await response.json();
		const mealsCategories = data.categories.filter(category => categories.includes(category.strCategory.toLowerCase()));
		return mealsCategories;
	} catch (error) {
		console.log(error);
	}
}

const getMealsData = async () => {
	try {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('error');
	}
}

export { getMealsData, getMealsCategories };
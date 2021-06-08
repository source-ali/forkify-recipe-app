export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bce57`
    );
    console.log(response);
    const data = await response.json();
    console.log(response, data);

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    const { recipe } = data.data;

    console.log(recipe);

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(`--- this is the recipe object ---`);
    console.log(state.recipe);
  } catch (error) {
    alert(error);
  }
};

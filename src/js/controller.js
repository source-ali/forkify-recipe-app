import * as model from './model.js';
import recipeView from './Views/recipeView.js';

const { func } = require('assert-plus');

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////

const controlRecipies = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpinner();

    // // 1) loading recipe
    await model.loadRecipe(id);

    // // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipies)
);
// window.addEventListener('hashchange', controlRecipies);
// window.addEventListener('load', controlRecipies);

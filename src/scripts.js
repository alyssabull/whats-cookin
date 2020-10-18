window.addEventListener('load', loadPage);

let allRecipes = document.querySelector('.all-recipes');
let searchBar = document.querySelector('.search-bar');
let recipeCardPage = document.querySelector('.recipe-card-page');
let header = document.querySelector('h1');
let dailyRecipe = document.querySelector('.daily-recipe');
let pantryStock = document.querySelector('.pantry');
let pantryBox = document.querySelector('.pantry-box');
let pantryButton = document.querySelector('.pantry-button');
let homeButton = document.querySelector('.home-button')
let favoritesButton = document.querySelector('.favorites-button');
let recipesToCookButton = document.querySelector('.recipes-to-cook-button');
let usersButton = document.querySelector('.users-button');

allRecipes.addEventListener('click', toggleFavoriteIcon);
allRecipes.addEventListener('click', toggleToCookIcon);
allRecipes.addEventListener('click', displayRecipeCard);
recipeCardPage.addEventListener('click', checkPantryStock);
homeButton.addEventListener('click', goHome);
favoritesButton.addEventListener('click', displayFavorites);
recipesToCookButton.addEventListener('click', displayRecipesToCook);
pantryButton.addEventListener('click', displayUserPantry);
usersButton.addEventListener('click', loadUser);

let user;
let pantry;
let potentialRecipes = [];

function loadPage() {
  loadUser();
  loadRecipeOfTheDay();
  loadRecipes();
}

function loadUser() {
  let randomIndex = Math.floor(Math.random() * 49);
  user = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);
  header.innerText = `What's Cookin', ${user.name}`;
}

function loadRecipeOfTheDay() {
  let randomIndex = Math.floor(Math.random() * 50);
  let randomRecipe = `<img src="${potentialRecipes[randomIndex].image}" class="daily-recipe-image">
  <p class="recipe-of-day"><span class="recipe-title">Recipe of the Day | </span> ${potentialRecipes[randomIndex].name}</p>`
  dailyRecipe.insertAdjacentHTML('afterbegin', randomRecipe);
}

function loadRecipes() {
    recipeData.map(recipe => {
        let eachRecipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
        potentialRecipes.push(eachRecipe);
    })
    displayAllRecipes();
}

function displayAllRecipes() {
    allRecipes.innerHTML = `<h3 class="title">All Recipes</h3>`;
    potentialRecipes.forEach(recipe => {
        if (user.favoriteRecipes.includes(recipe)) {
          let recipeCard = `
            <article class="recipe-card">
              <div class="view-recipe">
                <img src=${recipe.image} class="recipe-image ${recipe.id}">
              </div>
              <h4 class="recipe-name">${recipe.name}</h4>
              <div class="recipe-card-buttons">
              <img src="../assets/heart-icon-red.jpg" class="heart-button ${recipe.id}">
              <img src="../assets/unselected-chef-hat.svg" class="to-cook-button ${recipe.id}">
                  <br>
              </div>
            </article>`
      allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    } else if (user.recipesToCook.includes(recipe)) {
      let recipeCard = `
        <article class="recipe-card">
          <div class="view-recipe">
            <img src=${recipe.image} class="recipe-image ${recipe.id}">
          </div>
          <h4 class="recipe-name">${recipe.name}</h4>
          <div class="recipe-card-buttons">
          <img src="../assets/heart-regular.svg" class="heart-button ${recipe.id}">
          <img src="../assets/selected-chef-hat.svg" class="to-cook-button ${recipe.id}">
              <br>
          </div>
        </article>`
  allRecipes.insertAdjacentHTML('beforeend', recipeCard);
  } else {
    let recipeCard = `
      <article class="recipe-card">
        <div class="view-recipe">
          <img src=${recipe.image} class="recipe-image ${recipe.id}">
        </div>
        <h4 class="recipe-name">${recipe.name}</h4>
        <div class="recipe-card-buttons">
        <img src="../assets/heart-regular.svg" class="heart-button ${recipe.id}">
        <img src="../assets/unselected-chef-hat.svg" class="to-cook-button ${recipe.id}">
            <br>
        </div>
      </article>`
  allRecipes.insertAdjacentHTML('beforeend', recipeCard);
  }
    })
}

function displayFavorites() {
  pantryStock.innerHTML = '';
  allRecipes.classList.remove('hidden');
  allRecipes.innerHTML = `<h3 class="title">Favorite Recipes</h3>`;
  dailyRecipe.classList.add('hidden');
  favoritesButton.classList.add('inactive');
  pantryButton.classList.remove('hidden');
  recipesToCookButton.classList.remove('inactive');
  searchBar.classList.remove('hidden');
  if (user.favoriteRecipes.length > 0) {
    user.favoriteRecipes.forEach(recipe => {
      let recipeCard = `
        <article class="recipe-card">
          <div class="view-recipe">
            <img src=${recipe.image} class="recipe-image">
          </div>
          <h4 class="recipe-name">${recipe.name}</h4>
          <div>
          <button>REMOVE</button>
          <img src="../assets/unselected-chef-hat.svg" class="to-cook-button">
              <br>
          </div>
        </article>`
  allRecipes.insertAdjacentHTML('beforeend', recipeCard);
})
  } else {
      allRecipes.insertAdjacentHTML('beforeend', `<p class="no-recipe-message">No favorite recipes to display at this time! Click on the  <img src="../assets/heart-regular.svg" class="to-cook-button2">  icon to add a recipe!</p>`);
    }
  }

function displayRecipesToCook() {
    searchBar.classList.remove('hidden');
    allRecipes.classList.remove('hidden');
    pantryStock.innerHTML = '';
    recipeCardPage.innerHTML = '';
    allRecipes.innerHTML = `<h3 class="title">Recipes To Cook</h3>`;
    user.recipesToCook.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image ${recipe.id}">
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="heart-button ${recipe.id}">&hearts;</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function toggleFavoriteIcon(event) {
    if (event.target.classList.contains('heart-button')) {
    event.target.src = "../assets/heart-icon-red.jpg";
    event.target.classList.add('red-heart-button');
    event.target.classList.remove('heart-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.addToFavorites(recipe);
        }
    })
  } else if (event.target.classList.contains('red-heart-button')) {
    event.target.src = "../assets/heart-regular.svg";
    event.target.classList.add('heart-button');
    event.target.classList.remove('red-heart-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.removeFromFavorites(recipe);
        }
    })
  }
}

function toggleToCookIcon(event) {
    if (event.target.classList.contains('to-cook-button')) {
    event.target.src = "../assets/selected-chef-hat.svg";
    event.target.classList.add('gray-cook-button');
    event.target.classList.remove('to-cook-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.addToRecipesToCook(recipe);
        }
    })
  } else if (event.target.classList.contains('gray-cook-button')) {
    event.target.src = "../assets/unselected-chef-hat.svg";
    event.target.classList.add('to-cook-button');
    event.target.classList.remove('gray-cook-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.removeFromRecipesToCook(recipe);
        }
    })
  }
}


function displayUserPantry() {
  pantry = new Pantry(user.pantry);
  pantry.getPantryItems();
  searchBar.classList.add('hidden');
  allRecipes.classList.add('hidden');
  dailyRecipe.classList.add('hidden');
  pantryButton.classList.add('hidden');
  recipesToCookButton.classList.remove('inactive');
  favoritesButton.classList.remove('inactive');
  pantryStock.insertAdjacentHTML('afterbegin', `<div class="pantry-image"><img src="https://cdn.apartmenttherapy.info/image/upload/v1558687631/k/archive/8d007e7c8e504d69322e3f845fc1ed813f8305ec.png" class="pantry-image"><p class="pantry-stock">Current Pantry Stock</p></div>`)
  pantry.userPantry.forEach(ingredient => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let pantryInfo = `<article class="pantry-card">
        <div class="pantry-box" style="background-color:#${randomColor};"></div>
        <div class="pantry-info">
          <div>Ingredient: ${ingredient.name}</div>
          <div>Amount: ${ingredient.amount}</div>
        </div>
      </article>`
    pantryStock.insertAdjacentHTML('beforeend', pantryInfo);
  })
}


function checkPantryStock(event) {
    pantry = new Pantry(user.pantry);
    if (event.target.classList.contains('check-stock-button')) {
        potentialRecipes.forEach(recipe => {
            let id = recipe.id;
            if(event.target.classList.contains(id)) {
                pantry.checkStock(recipe);
                let missingIngredientsList = `
                    <div>Missing Ingredients: ${pantry.missingIngredients.map(ingredient => {return ` ${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}`})}</div>`
                recipeCardPage.insertAdjacentHTML('beforeend', missingIngredientsList);
            }
        })
    }
}

function displayRecipesToCook() {
  pantryStock.innerHTML = '';
  allRecipes.classList.remove('hidden');
  allRecipes.innerHTML = `<h3 class="title">Recipes to Cook</h3>`;
  recipesToCookButton.classList.add('inactive');
  dailyRecipe.classList.add('hidden');
  pantryButton.classList.remove('hidden');
  favoritesButton.classList.remove('inactive');
  searchBar.classList.remove('hidden');
  if (user.recipesToCook.length > 0) {
    user.recipesToCook.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image">
            </div>
            <h4 class="recipe-name">${recipe.name}</h4>
            <div>
            <img src="../assets/heart-regular.svg" class="heart-button">
            <button>REMOVE</button>
            <button>Check Pantry Stock</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
  })
} else {
    allRecipes.insertAdjacentHTML('beforeend', `<p class="no-recipe-message">No recipes to cook to display at this time! Click on the  <img src="../assets/unselected-chef-hat.svg" class="to-cook-button2">  icon to add a recipe!</p>`);
  }
}

function goHome() {
  searchBar.classList.remove('hidden');
  allRecipes.classList.remove('hidden');
  dailyRecipe.classList.remove('hidden');
  pantryButton.classList.remove('hidden');
  recipesToCookButton.classList.remove('hidden');
  favoritesButton.classList.remove('inactive');
  recipeCardPage.innerHTML = '';
  pantryStock.innerHTML = '';
  displayAllRecipes();
}

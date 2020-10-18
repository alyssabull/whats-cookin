window.addEventListener('load', loadPage);

let allRecipes = document.querySelector('.all-recipes');
let searchBar = document.querySelector('.search-bar');
let pantryStock = document.querySelector('.pantry');
let recipeCardPage = document.querySelector('.recipe-card-page');
let homeButton = document.querySelector('.home-button');
let favoritesButton = document.querySelector('.favorites-button');
let recipesToCookButton = document.querySelector('.recipes-to-cook-button');
let pantryButton = document.querySelector('.pantry-button');



allRecipes.addEventListener('click', toggleFavoriteIcon);
allRecipes.addEventListener('click', toggleToCookIcon);
allRecipes.addEventListener('click', displayRecipeCard);
recipeCardPage.addEventListener('click', checkPantryStock);
homeButton.addEventListener('click', goHome);
favoritesButton.addEventListener('click', displayFavorites);
recipesToCookButton.addEventListener('click', displayRecipesToCook);
pantryButton.addEventListener('click', displayUserPantry);


let user;
let pantry;
let potentialRecipes = [];

function loadPage() {
  loadUser();
  loadRecipes();
}

function loadUser() {
  user = new User(usersData[0].name, usersData[0].id, usersData[0].pantry);
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
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image ${recipe.id}">
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="heart-button ${recipe.id}">&hearts;</button>
              <button class="to-cook-button ${recipe.id}">&#43;</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function displayFavorites() {
    searchBar.classList.remove('hidden');
    allRecipes.classList.remove('hidden');
    pantryStock.innerHTML = '';
    recipeCardPage.innerHTML = '';
    allRecipes.innerHTML = `<h3 class="title">Favorite Recipes</h3>`;
    user.favoriteRecipes.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image ${recipe.id}">
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="to-cook-button ${recipe.id}">&#43;</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
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
    event.target.classList.add('red-heart-button');
    event.target.classList.remove('heart-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.addToFavorites(recipe);
        }
    })
  } else if (event.target.classList.contains('red-heart-button')) {
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
    event.target.classList.add('gray-cook-button');
    event.target.classList.remove('to-cook-button');
    potentialRecipes.forEach(recipe => {
        let id = recipe.id;
        if(event.target.classList.contains(id)) {
            user.addToRecipesToCook(recipe);
        }
    })
  } else if (event.target.classList.contains('gray-cook-button')) {
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
  recipeCardPage.innerHTML = '';
  pantry.userPantry.forEach(ingredient => {
    let pantryInfo = `<article class="pantry-card">
        <div class="pantry-info">Ingredient: ${ingredient.name}</div>
        <div class="pantry-info">Amount: ${ingredient.amount}</div>
      </article>`
    pantryStock.insertAdjacentHTML('afterbegin', pantryInfo);
  })
}

function checkPantryStock(event) {
    pantry = new Pantry(user.pantry);
    if (event.target.classList.contains('check-stock-button')) {
        potentialRecipes.forEach(recipe => {
            let id = recipe.id;
            pantry.listMissingIngredients(recipe);
            if(event.target.classList.contains(id)) {
                let missingIngredients = `
                    <div>Missing Ingredients: ${recipe.ingredients.map(ingredient => {return ` ${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}`})}</div>`
                recipeCardPage.insertAdjacentHTML('beforeend', missingIngredients);
            }
        })
    }
}

function displayRecipeCard(event) {
    if (event.target.classList.contains('recipe-image')) {
        potentialRecipes.forEach(recipe => {
            let id = recipe.id;
            recipe.getIngredients(recipe);
            if(event.target.classList.contains(id)) {
                searchBar.classList.add('hidden');
                allRecipes.classList.add('hidden');
                let recipeInfo = `<article class="recipe-card-page">
                    <div class="recipe-name">${recipe.name}</div>
                    <div class="recipe-page-image"><img src='${recipe.image}'></div>
                    <div class="recipe-ingredients">Ingredients: ${recipe.ingredients.map(ingredient => {return ` ${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}`})}</div>
                    <div class="recipe-instructions">Instructions: ${recipe.instructions.map(instruction => {return `${instruction.number}: ${instruction.instruction}`})}</div>
                    <div class="recipe-cost">Cost: $</div>
                    <button class="check-stock-button pink-button ${recipe.id}">Check Pantry Stock</button>
                    </article>`
                recipeCardPage.insertAdjacentHTML('afterbegin', recipeInfo);
            }
        })
    }
}

function goHome() {
  searchBar.classList.remove('hidden');
  allRecipes.classList.remove('hidden');
  pantryStock.innerHTML = '';
  recipeCardPage.innerHTML = '';
  displayAllRecipes();
}

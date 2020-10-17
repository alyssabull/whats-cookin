window.addEventListener('load', loadPage);

let allRecipes = document.querySelector('.all-recipes');
let pantryButton = document.querySelector('.pantry-button');
let searchBar = document.querySelector('.search-bar');
let pantryStock = document.querySelector('.pantry');
let homeButton = document.querySelector('.home-button')


allRecipes.addEventListener('click', toggleFavoriteIcon);
allRecipes.addEventListener('click', toggleToCookIcon);
pantryButton.addEventListener('click', displayUserPantry);
homeButton.addEventListener('click', goHome);

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
              <img src=${recipe.image} class="recipe-image" id=${recipe.id}>
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
  pantry.userPantry.forEach(ingredient => {
    let pantryInfo = `<article class="pantry-card">
        <i class ="fa fa-arrow-right"></i>
        <div class="pantry-info">Ingredient: ${ingredient.name}</div>
        <div class="pantry-info">Amount: ${ingredient.amount}</div>
      </article>`
    pantryStock.insertAdjacentHTML('afterbegin', pantryInfo);
  })
}

function goHome() {
  searchBar.classList.remove('hidden');
  allRecipes.classList.remove('hidden');
  pantryStock.innerHTML = '';
  displayAllRecipes();
}

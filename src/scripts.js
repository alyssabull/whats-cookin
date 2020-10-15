window.addEventListener('load', loadPage);

let allRecipes = document.querySelector('.all-recipes');
// let recipeCard = document.querySelectorAll('.recipe-card');
// let recipeCardImage = document.querySelectorAll('.recipe-image');
// let toCookButton = document.querySelector('.to-cook-button');
// let grayCookButton = document.querySelector('.gray-cook-button');
// let recipeImage = document.querySelector('.view-recipe');

let pantryButton = document.querySelector('.pantry-button');
let searchBar = document.querySelector('.search-bar');
let pantryStock = document.querySelector('.pantry');

// recipeCard[0].addEventListener('click', toggleFavoriteIcon);
// redHeartButton.addEventListener('click', toggleFavoriteIcon);
allRecipes.addEventListener('click', handleRecipeCard);
pantryButton.addEventListener('click', displayUserPantry);

let user;
let pantry;

function loadPage() {
  loadUser();
  displayAllRecipes();
}

function loadUser() {
  user = new User(usersData[0].name, usersData[0].id, usersData[0].pantry);
}

function handleRecipeCard(event) {
  if (event.target.classList.contains('heart-button')) {
    toggleFavoriteIcon();
  }
}

function displayAllRecipes() {
    allRecipes.innerHTML = '';
    recipeData.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image" id=${recipe.id}>
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="heart-button"><i class="fa fa-heart-o fa-2x"></i></button>
              <button class="red-heart-button hidden"><i class="fa fa-heart fa-2x"></i></button>
              <button class="to-cook-button"><i class="fa fa-bookmark-o fa-2x"></i></button>
              <button class="gray-cook-button hidden"><i class="fa fa-bookmark fa-2x"></i></button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function toggleFavoriteIcon() {
  let heartButton = document.querySelector('.heart-button');
  let redHeartButton = document.querySelector('.red-heart-button');
  if (heartButton.classList.contains('hidden')) {
    heartButton.classList.add('hidden');
    redHeartButton.classList.remove('hidden');
  } else {
    heartButton.classList.remove('hidden');
    redHeartButton.classList.add('hidden');
  }
}

function displayUserPantry() {
  pantry = new Pantry(user.pantry);
  pantry.getPantryItems();
  searchBar.classList.add('hidden');
  allRecipes.innerHTML = "";
  pantry.userPantry.forEach(ingredient => {
    let pantryInfo = `<article class="pantry-card">
        <div class="pantry-info">Ingredient: ${ingredient.name}</div>
        <div class="pantry-info">Amount: ${ingredient.amount}</div>
      </article>`
    pantryStock.insertAdjacentHTML('afterbegin', pantryInfo);
  })
}

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

function loadPage() {
  loadUser();
  displayAllRecipes();
}

function loadUser() {
  user = new User(usersData[0].name, usersData[0].id, usersData[0].pantry);
}

function displayAllRecipes() {
    allRecipes.innerHTML = `<h3 class="title">All Recipes</h3>`;
    recipeData.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image" id=${recipe.id}>
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="heart-button">&hearts;</button>
              <button class="to-cook-button">&#43;</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function toggleFavoriteIcon(event) {
    if (event.target.className === 'heart-button') {
    event.target.classList.add('red-heart-button');
    event.target.classList.remove('heart-button');
  } else if (event.target.className === 'red-heart-button') {
    event.target.classList.add('heart-button');
    event.target.classList.remove('red-heart-button');
  }
}

function toggleToCookIcon(event) {
    if (event.target.className === 'to-cook-button') {
    event.target.classList.add('gray-cook-button');
    event.target.classList.remove('to-cook-button');
  } else if (event.target.className === 'gray-cook-button') {
    event.target.classList.add('to-cook-button');
    event.target.classList.remove('gray-cook-button');
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

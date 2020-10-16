window.addEventListener('load', loadPage);

let allRecipes = document.querySelector('.all-recipes');
let pantryButton = document.querySelector('.pantry-button');
let searchBar = document.querySelector('.search-bar');
let pantryStock = document.querySelector('.pantry');
let homeButton = document.querySelector('.home-button')


allRecipes.addEventListener('click', toggleFavoriteIcon);
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
              <button class="red-heart-button hidden">&hearts;</button>
              <button class="to-cook-button">&#43;</button>
              <button class="gray-cook-button hidden">&#43;</button>
                <br>
            </div>
          </article>`
    allRecipes.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function toggleFavoriteIcon(event) {
  let heartButton = document.querySelector('.heart-button');
  let redHeartButton = document.querySelector('.red-heart-button');
    if (event.target.className === 'heart-button') {
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

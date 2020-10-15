window.addEventListener('load', displayAllRecipes);

let recipeCards = document.querySelector('.all-recipes');
let recipeCard = document.querySelector('.recipe-card');
// let heartButton = document.querySelector('.heart-button');
// let redHeartButton = document.querySelector('.red-heart-button');
// let toCookButton = document.querySelector('.to-cook-button');
// let grayCookButton = document.querySelector('.gray-cook-button');


recipeCard.addEventListener('click', toggleFavoriteIcon);
// redHeartButton.addEventListener('click', toggleFavoriteIcon);

function displayAllRecipes() {
    recipeCards.innerHTML = '';
    recipeData.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image">
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
    recipeCards.insertAdjacentHTML('beforeend', recipeCard);
    })
}

function toggleFavoriteIcon(event) {
  if (event.target.classList.contains('hidden')) {
    alert('hello!');
    heartButton.classList.add('hidden');
    redHeartButton.classList.remove('hidden');
  } else {
    heartButton.classList.remove('hidden');
    redHeartButton.classList.add('hidden');
  }
}

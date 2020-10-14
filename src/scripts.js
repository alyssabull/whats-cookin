let recipeCards = document.querySelector('.all-recipes');

window.addEventListener('load', displayAllRecipes);

function displayAllRecipes() {
    recipeData.forEach(recipe => {
        let recipeCard = `
          <article class="recipe-card">
            <div class="view-recipe">
              <img src=${recipe.image} class="recipe-image">
            </div>
            <h4>${recipe.name}</h4>
            <div class="recipe-card-buttons">
              <button class="recipe-button"><img src="https://image.flaticon.com/icons/png/512/14/14815.png" class="recipe-button-image"></button>
              <button class="recipe-button"><img src ="https://img.icons8.com/ios/452/chef-hat.png" class="recipe-button-image"></button>
                <br>
            </div>
          </article>`
    recipeCards.insertAdjacentHTML('beforeend', recipeCard);
    })
}
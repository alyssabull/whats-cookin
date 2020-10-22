# Project: What's Cookin'? - Pair

## Our Site

>[Deployed GitHub Pages Site](https://jdxsmith.github.io/whats-cookin/)

## Project Specs and Rubric

>[What's Cookin'?](https://frontend.turing.io/projects/whats-cookin.html)

## Project Team 

>[Alyssa Bull](https://github.com/alyssabull), contributor

>[Jordon Smith](https://github.com/jdxsmith), contributor

## Overview

* In this project, we've created a recipe tracking / meal planning application that allows users to view their favorite recipes and see which ingredients they are missing. Users should be able to view a list of recipes, favorite their own recipes, and choose recipes to cook, and view the ingredients that they need based off of their chosen recipe.

## Project Goals

* Implement ES6 classes that communicate to each other as needed
* Implement a robust testing suite using TDD
* Use object and array prototype methods to perform data manipulation
* Create a user interface that is easy to use and displays information in a clear way

## Functionality

#### Home Page

* When the user loads the page, a home page is displayed that features an 'All Recipes' section as well as a search section. The 'All Recipes' section shows a list of recipes that a user may view and add to their favorites or recipes to cook if they desire. The search section allows a user to filter recipes by category or ingredient.

![Screen Shot 2020-10-21 at 7 58 04 PM](https://user-images.githubusercontent.com/67242223/96809320-dce7b080-13d7-11eb-8595-30dc6e745a02.png)

#### Navigation Bar

* The navigation bar at the top of the page can be used to navigate through the different pages, such as the home page, a user's favorites, a user's recipes to cook, and a user's pantry.
* There is also a 'User' button that when clicked will assign a new user and a new pantry associated with that user.

![Screen Shot 2020-10-21 at 8 00 30 PM](https://user-images.githubusercontent.com/67242223/96809425-16b8b700-13d8-11eb-86d4-536e2db76b3c.png)

#### Searching For Recipes

* The search section appears on the left hand side of the screen when the user is on the home page, favorite recipes page, or the recipes to cook page.
* The search results will change based on the page the user is on

![Screen Shot 2020-10-21 at 8 01 37 PM](https://user-images.githubusercontent.com/67242223/96809626-7dd66b80-13d8-11eb-9dfe-b9b143f2867c.png)

#### Recipe Page

* When a user clicks on a recipe, they are taken to that recipe's page.  They then can view the ingredients and instructions required for the recipe.
* A user can also click a 'Check Pantry Stock' button (described below)

![Screen Shot 2020-10-21 at 8 04 13 PM](https://user-images.githubusercontent.com/67242223/96809767-9ba3d080-13d8-11eb-956e-263eaa524f81.png)

#### Checking Pantry Stock

* After a recipe is selected, the user has the option to 'Check Pantry Stock'.  This will tell them which ingredients they are missing and how much of that ingredient they need.

![Screen Shot 2020-10-21 at 8 05 18 PM](https://user-images.githubusercontent.com/67242223/96810272-c42bca80-13d8-11eb-8ef9-cf57931e788a.png)

#### Favorited Recipes Page

* After a user has favorited some recipes, they may click the 'Favorites' button on the NAV to take them to their favorited recipes.

![Screen Shot 2020-10-21 at 8 06 27 PM](https://user-images.githubusercontent.com/67242223/96810819-ed4c5b00-13d8-11eb-97b1-6fc268360238.png)

#### Recipes To Cook Page

* After a user has selected some recipes to cook, they may click the 'Recipes To Cook' button on the NAV to take them to their recipes to cook.

![Screen Shot 2020-10-21 at 8 07 34 PM](https://user-images.githubusercontent.com/67242223/96811265-140a9180-13d9-11eb-9d08-26d64e7cc60f.png)

#### User Pantry

* A user can click on the 'Pantry' button on the NAV to view all of their ingredients, along with the amount that they have.

![Screen Shot 2020-10-21 at 8 08 27 PM](https://user-images.githubusercontent.com/67242223/96811888-43b99980-13d9-11eb-9859-d4b984a02eca.png)

#### Wins 
* Creating class structure and corresponding tests from scratch
* Using correct array iterator methods when needed
* Connecting our Class JS files to our main JS file
* Consistent Git workflow
* Solid collaboration methods

#### Challenges
* Writing useful sad path tests
* Having Class methods be useful/accurate before DOM manipulation
* Focusing on data model first
* Refactoring code right after it’s written (instead of waiting to do it later)

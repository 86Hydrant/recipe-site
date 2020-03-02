import React from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav.js";
import RecipeCard from "./components/RecipeCard.js";
import chiliconoumph from "./components/chiliconoumph.png";
import recipeList from "./components/recipes.js";
//TO DO:
// -fix ref for images
// -Add "jump in!" button with scrolldown animation to recipes!

function App() {
  const recipesArray = recipeList.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        recipeName={recipe.name}
        imgURL={recipe.imgURL}
        recipeIngr={recipe.recipeIngr}
        recipeIntr={recipe.recipeInstruct}
      />
    );
  });
  return (
    <div className="App">
      <HeaderNav />
      <div className="card-container">{recipesArray}</div>
    </div>
  );
}

export default App;

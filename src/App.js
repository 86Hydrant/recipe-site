import React from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav.js";
import RecipeCard from "./components/RecipeCard.js";
import chiliconoumph from "./components/chiliconoumph.png";
import recipeList from "./components/recipes.js";
//TO DO: fix ref for images
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="card-container">
        <RecipeCard
          recipeName={recipeList.recipe1.name}
          imgURL={chiliconoumph}
          recipeIngr={recipeList.recipe1.recipeIngr}
        />
        <RecipeCard imgURL="" recipeName="Chili Con Oumph!" recipeIngr="..." />
        <RecipeCard
          imgURL={chiliconoumph}
          recipeName="Chili Con Oumph!"
          recipeIngr="..."
        />
        <RecipeCard
          imgURL={chiliconoumph}
          recipeName="Chili Con Oumph!"
          recipeIngr="..."
        />
      </div>
    </div>
  );
}

export default App;

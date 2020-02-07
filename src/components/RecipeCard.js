import React from "react";

function RecipeCard(props) {
  return (
    <div className="recipe-card-wrapper">
      <img src={props.imgURL} alt="Pic of Dish." width="300px" height="300px" />
      <h2>{props.recipeName}</h2>
      <p>{props.recipeIngr}</p>
    </div>
  );
}

//<li> elements for ingr list using conditional rendering and the list array from recipe file
// Some way to import recipe file to this file and automatically render all recipes?
//

export default RecipeCard;

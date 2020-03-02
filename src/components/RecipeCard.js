import React from "react";
import recipeList from "./recipes.js";

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

//MAPPING:
/*
import jokesData from "./jokesData"
!!JokesData is an array of objects rather than a single object!

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
*/

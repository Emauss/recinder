import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";

const ListOfRecipes = () => {
  return (
    <>
      <div className="col-12 col-md-9">
        <RecipeElement />
        <RecipeElement />
        <RecipeElement />
        <RecipeElement />
      </div>
    </>
  );
};
export default ListOfRecipes;

import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";

const ListOfRecipes = () => {
  return (
    <>
      <div className="listOfRecipes p-3">
        <RecipeElement />
      </div>
    </>
  );
};
export default ListOfRecipes;

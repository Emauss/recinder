import "../recipeElement/recipeElement.scss";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBill,
  faUser,
} from "@fortawesome/fontawesome-free-solid";

const RecipeElement = ({ recipe }) => {
  fontawesome.library.add(faClock, faMoneyBill, faUser);

  return (
    <>
      <div className="row recipeBlock p-3">
        <div className="col-12 col-lg-8 mb-3">
          <h2 className="titleRecipe">{recipe.title}</h2>
          <p>{recipe.summary.replace(/<[^>]*>?/gm, "")}</p>
          <div className="row shortInfoBar align-items-end justify-content-end mb-3">
            <div className="col">
              <span className="col-12 col-md-4">
                <FontAwesomeIcon icon="clock" />
                &nbsp; {recipe.readyInMinutes}'
              </span>
              <span className="col-12 col-md-4">
                <FontAwesomeIcon icon="money-bill-alt" />
                &nbsp; {(recipe.pricePerServing / 100).toFixed(2)}$ per serving
              </span>
              <span className="col-12 col-md-4">
                <FontAwesomeIcon icon="user" />
                &nbsp; {recipe.servings}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center align-self-center">
          <img src={recipe.image} alt={recipe.title} className="imgSize" />
        </div>
      </div>
    </>
  );
};
export default RecipeElement;

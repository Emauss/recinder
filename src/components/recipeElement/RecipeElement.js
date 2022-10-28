import "../recipeElement/recipeElement.scss";
import foto_1 from "../../assets/images/cooking.png";

const RecipeElement = () => {
  return (
    <>
      <div className="row recipeBlock p-3">
        <div className="col-12 col-lg-8 mb-3">
          <h2 className="titleRecipe">Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="row shortInfoBar align-items-end justify-content-end mb-3">
            <div className="col">
              <span className="col-12 col-md-4">Time: 55'</span>
              <span className="col-12 col-md-4">Price: 29$</span>
              <span className="col-12 col-md-4">Calories: 500kcal</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <img src={foto_1} alt="" className="imgSize" />
        </div>
      </div>
    </>
  );
};
export default RecipeElement;

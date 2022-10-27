import "../recipeElement/recipeElement.scss";

const RecipeElement = () => {
  return (
    <>
      <div className="d-flex recipeBlock p-4 mb-3">
        <div>
          <h2 className="titleRecipe">Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="shortInfoBar align-items-end">
            <span>Time: 55'</span>
            <span>Price: 29$</span>
            <span>Calories: 500kcal</span>
          </div>
        </div>
        <img
          src="https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/7788/spaghetti-napolitana.jpg"
          alt=""
          className="imgSize ms-5"
        />
      </div>
    </>
  );
};
export default RecipeElement;

import "../recipeElement/recipeElement.scss";

const RecipeElement = () => {
  return (
    <>
      <div className="container">
        <h2>Title</h2>
        <p>
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="">
          <p>Time</p>
          <p>Duration</p>
          <p>Calories</p>
        </div>
        <img
          src="https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/7788/spaghetti-napolitana.jpg"
          alt=""
          className="imgSize"
        />
      </div>
    </>
  );
};
export default RecipeElement;

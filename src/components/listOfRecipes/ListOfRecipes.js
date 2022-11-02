import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";
import InfiniteScroll from "react-infinite-scroller";

const ListOfRecipes = ({ data }) => {
  return (
    <>
      <div className="col-12 col-md-9">
        <InfiniteScroll
          pageStart={0}
          loadMore={(val) => console.log("nastepne", val)}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data.map((recipe) => (
            <RecipeElement recipe={recipe} key={recipe.id} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};
export default ListOfRecipes;

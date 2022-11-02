import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";
import InfiniteScroll from "react-infinite-scroller";
import { getRecipes } from "../../api/Api";

const ListOfRecipes = ({ data, setData }) => {
  const getMoreResults = (val) => {
    getRecipes(val * 10).then((res) => setData(res.results));
  };

  return (
    <>
      <div className="col-12 col-md-9">
        <InfiniteScroll
          pageStart={0}
          loadMore={(val) => getMoreResults(val)}
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

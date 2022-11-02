import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";
import InfiniteScroll from "react-infinite-scroller";
import { getRecipes } from "../../api/Api";

const ListOfRecipes = ({ data, setData, currentItems, setCurrentItems, totalResults, setTotalResults, error, setError }) => {
  const handleData = async (page) => {
    await getRecipes(page * 10).then(
      (res) => {
        setError("");
        setCurrentItems(page * 10);
        setTotalResults(res.totalResults);
        setData(res.results);
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  return (
    <div className="col-12 col-md-9">
      <InfiniteScroll
        pageStart={0}
        loadMore={(page) => handleData(page)}
        hasMore={!error.length ? (totalResults ? currentItems < totalResults : true) : false}
        loader={
          <div class="text-center loader my-4" key={0}>
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        {!totalResults || data.length || error.length ? (
          data.map((recipe) => <RecipeElement recipe={recipe} key={recipe.id} />)
        ) : (
          <p class="text-center my-4">Nothing to show</p>
        )}
      </InfiniteScroll>
      {error.length ? <div class="error text-center text-danger my-4">{error}</div> : null}
    </div>
  );
};
export default ListOfRecipes;

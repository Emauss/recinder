/* eslint-disable react-hooks/exhaustive-deps */
import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";
import InfiniteScroll from "react-infinite-scroller";
import { getRecipes } from "../../api/Api";
import { useEffect, useState } from "react";

const ListOfRecipes = ({ data, setData, filters }) => {
  let [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [currentItems, setCurrentItems] = useState(10);
  const [totalResults, setTotalResults] = useState();

  const handleData = async (page) => {
    await getRecipes(page * 10, filters).then(
      (res) => {
        setError("");
        setCurrentItems(page * 10);
        setPage(page);
        setTotalResults(res.totalResults);
        setData(res.results);
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  useEffect(() => {
    setPage(1);
    handleData(1);
  }, [filters]);

  return (
    <div className="col-12 col-md-9">
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={() => handleData(++page)}
        hasMore={!error.length ? (totalResults ? currentItems < totalResults : true) : false}
        loader={
          <div className="text-center loader my-4" key={0}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        {!totalResults || data.length || error.length ? (
          data.map((recipe) => <RecipeElement recipe={recipe} key={recipe.id} />)
        ) : (
          <p className="text-center my-4">Nothing to show</p>
        )}
      </InfiniteScroll>
      {error.length ? <div className="error text-center text-danger my-4">{error}</div> : null}
    </div>
  );
};
export default ListOfRecipes;

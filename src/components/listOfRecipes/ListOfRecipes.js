/* eslint-disable react-hooks/exhaustive-deps */
import "..//listOfRecipes/listOfRecipes.scss";
import RecipeElement from "../recipeElement/RecipeElement";
import InfiniteScroll from "react-infinite-scroller";
import { getRecipes } from "../../api/Api";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const ListOfRecipes = ({ data, setData, filters }) => {
  const [page, setPage] = useState(1);
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
    handleData(1);
  }, [filters]);

  return (
    <div className="col-12 col-md-9">
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        threshold={500}
        loadMore={() => handleData(page + 1)}
        hasMore={!error.length ? (totalResults ? currentItems < totalResults : true) : false}
        loader={<Loader />}
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

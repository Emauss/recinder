import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Finder = () => {
  const [filters, setFilters] = useState({
    cuisine: [],
    category: [],
    tools: [],
    ingredients: [],
    intolerance: [],
    sort: "",
  });
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentItems, setCurrentItems] = useState(10);
  const [totalResults, setTotalResults] = useState();
  const [error, setError] = useState("");

  const handleFiltering = (e) => {
    e.preventDefault();
    // const urlParams = new URLSearchParams(window.location.search);
    // urlParams.set("cuisine", generateArray(filters.cuisine).join(",+"));
    generateArray(filters.cuisine).forEach((element) => {
      // params.set('cuisine': `${element}&`)
      setSearchParams({ "cuisine[]": element + "&" });
    });
    console.log(Object.fromEntries([...searchParams]));
    console.log(searchParams.entries());
  };

  const generateArray = (filterItem) => {
    return filterItem.map((item) => {
      return item.value;
    });
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Let's explore some recipes! 👨🏻‍🍳</h2>
      <div className="row">
        <FilteringTab filters={filters} setFilters={setFilters} handleFiltering={handleFiltering} />
        <ListOfRecipes
          data={data}
          setData={setData}
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          totalResults={totalResults}
          setTotalResults={setTotalResults}
          setError={setError}
          error={error}
        />
      </div>
    </div>
  );
};
export default Finder;

import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../api/Api";
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

  // const [offset, setOffset] = useState(0);

  useEffect(() => {
    // getAllRecipes().then((res) => setData(res.results));
  }, []);

  const handleFiltering = (e) => {
    e.preventDefault();
    // const urlParams = new URLSearchParams(window.location.search);
    // urlParams.set("cuisine", generateArray(filters.cuisine).join(",+"));
    generateArray(filters.cuisine).forEach((element) => {
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
    <>
      <div className="container ">
        <h2 className="mt-5 mb-3">Let's explore some recipes!👨🏻‍🍳</h2>
        <div className="row">
          <FilteringTab
            filters={filters}
            setFilters={setFilters}
            handleFiltering={handleFiltering}
          />
          <ListOfRecipes data={data} />
        </div>
      </div>
    </>
  );
};
export default Finder;

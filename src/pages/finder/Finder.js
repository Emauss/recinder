import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import ScrollTop from "../../components/scrollTop/ScrollTop";
import { useState } from "react";

const Finder = () => {
  const [filters, setFilters] = useState({
    cuisine: [],
    type: [],
    tools: [],
    ingredients: [],
    intolerance: [],
    sort: undefined,
  });
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Let's explore some recipes! 👨🏻‍🍳</h2>
      <div className="row">
        <FilteringTab filters={filters} setFilters={setFilters} />
        <ListOfRecipes data={data} setData={setData} filters={filters} />
      </div>
      <ScrollTop />
    </div>
  );
};
export default Finder;

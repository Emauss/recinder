import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useEffect, useState } from "react";
import { getRecipes } from "../../api/Api";

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

  useEffect(() => {
    getRecipes().then((res) => setData(res.results));
  }, []);

  return (
    <>
      <div className="container ">
        <h2 className="mt-5 mb-3">Let's explore some recipes! 👨🏻‍🍳</h2>
        <div className="row">
          <FilteringTab filters={filters} setFilters={setFilters} />
          <ListOfRecipes data={data} setData={setData} />
        </div>
      </div>
    </>
  );
};
export default Finder;

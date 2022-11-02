import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useState } from "react";

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
  const [currentItems, setCurrentItems] = useState(10);
  const [totalResults, setTotalResults] = useState();
  const [error, setError] = useState("");

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Let's explore some recipes! 👨🏻‍🍳</h2>
      <div className="row">
        <FilteringTab filters={filters} setFilters={setFilters} />
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

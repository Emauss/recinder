import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useState } from "react";

const Finder = () => {

  const [filters, setFilters] = useState({});

  // const [cuisine, setCuisine] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [tools, setTools] = useState([]);
  // const [ingredients, setIngredients] = useState([]);
  // const [intolerance, setIntolerance] = useState([]);
  // const [sort, setSort] = useState('');

  return (
    <>
      <div className="container ">
        <h2 className="mt-5 mb-3">Let's explore some recipes!👨🏻‍🍳</h2>
        <div className="row">
          <FilteringTab filters={filters} setFilters={setFilters} />
          <ListOfRecipes />
        </div>
      </div>
    </>
  );
};
export default Finder;

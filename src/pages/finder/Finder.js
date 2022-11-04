import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../api/Api";

const Finder = () => {
  const [filters, setFilters] = useState({
    cuisine: [],
    type: [],
    tools: [],
    ingredients: [],
    intolerance: [],
    sort: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    // getAllRecipes().then((res) => setData(res.results));
  }, []);

  const handleFiltering = (e) => {
    e.preventDefault();

    let filtered_list = [];
    const arrays = Object.entries(filters);

    for (const arr of arrays) {
      const values = [].concat(...arr);
      filtered_list.push(values[0]);
      let chosen_filters = [];

      for (let i = 1; i < values.length; i++) {
        const specific = Object.values(values[i]);
        chosen_filters.push(specific[0]);
      }

      chosen_filters = chosen_filters.join(",+");
      filtered_list.push(chosen_filters);
    }

    // console.log(filtered_list);

    let urlParams =
      filtered_list[0] +
      "=" +
      filtered_list[1] +
      "&" +
      filtered_list[2] +
      "=" +
      filtered_list[3] +
      "&" +
      filtered_list[4] +
      "=" +
      filtered_list[5] +
      "&" +
      filtered_list[6] +
      "=" +
      filtered_list[7] +
      "&" +
      filtered_list[8] +
      "=" +
      filtered_list[9] +
      "&" +
      filtered_list[10] +
      "=" +
      filtered_list[11];

    // console.log(urlParams);

    return urlParams;
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

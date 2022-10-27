import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";

const Finder = () => {
  return (
    <>
      <div className="container">
        <h2>Let's explore some recipes!👨🏻‍🍳</h2>
        <FilteringTab />
        <ListOfRecipes />
      </div>
    </>
  );
};
export default Finder;

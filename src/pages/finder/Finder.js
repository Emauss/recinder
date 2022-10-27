import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";

const Finder = () => {
  return (
    <>
      <h2>Let's explore some recipes!👨🏻‍🍳</h2>
      <FilteringTab />
      <ListOfRecipes />
    </>
  );
};
export default Finder;

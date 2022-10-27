import "../finder/finder.scss";
import FilteringTab from "../../components/filteringBar/FilteringTab";
import ListOfRecipes from "../../components/listOfRecipes/ListOfRecipes";

const Finder = () => {
  return (
    <>
      <div className="container ">
        <h2 className="my-5">Let's explore some recipes!👨🏻‍🍳</h2>
        <div className="d-flex">
          <FilteringTab />
          <ListOfRecipes />
        </div>
      </div>
    </>
  );
};
export default Finder;

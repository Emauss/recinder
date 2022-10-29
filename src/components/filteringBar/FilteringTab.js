import "../filteringBar/filteringTab.scss";
import Select from "react-select";
import {
  CUISINE,
  CATEGORY,
  TOOLS,
  INGREDIENTS,
  INTOLERANCE,
  SORTINGOPTIONS,
} from "../../const/filterItems";

const FilteringTab = ({ filters, setFilters }) => {
  return (
    <div className="col-12 col-md-3">
      <form>
        <div className="filteringTab p-3">
          <Select
            options={CUISINE}
            placeholder="Select cuisine"
            className="mb-2"
            isMulti
            // value={filters?.cuisine?.filter((item) =>
            //   cuisine.includes(item.value)
            // )}
            onChange={(val) => setFilters({ ...filters, cuisine: val })}
          />
          <Select
            options={CATEGORY}
            placeholder="Select category"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, category: val })}
          />

          <Select
            options={TOOLS}
            placeholder="Select tools"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, tools: val })}
          />

          <Select
            options={INGREDIENTS}
            placeholder="Select ingredients"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, ingredients: val })}
          />

          <Select
            options={INTOLERANCE}
            placeholder="Select intolerance"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, intolerance: val })}
          />

          <Select
            options={SORTINGOPTIONS}
            placeholder="Sort"
            className="mb-2"
            onChange={(val) => setFilters({ ...filters, sort: val })}
          />
          <button type="button" className="btn submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FilteringTab;

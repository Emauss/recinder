import "../filteringBar/filteringTab.scss";
import Select from "react-select";
import {
  CUISINE,
  TYPE,
  TOOLS,
  INGREDIENTS,
  INTOLERANCE,
  SORTINGOPTIONS,
} from "../../const/filterItems";

const FilteringTab = ({ filters, setFilters, handleFiltering }) => {
  return (
    <div className="col-12 col-md-3">
      <form onSubmit={handleFiltering}>
        <div className="filteringTab p-3">
          <Select
            options={CUISINE}
            placeholder="Select cuisine"
            className="mb-2"
            isMulti
            value={filters.cuisine}
            onChange={(val) => setFilters({ ...filters, cuisine: val })}
          />
          <Select
            options={TYPE}
            placeholder="Select type"
            className="mb-2"
            isMulti
            value={filters.type}
            onChange={(val) => setFilters({ ...filters, type: val })}
          />

          <Select
            options={TOOLS}
            placeholder="Select tools"
            className="mb-2"
            isMulti
            value={filters.tools}
            onChange={(val) => setFilters({ ...filters, tools: val })}
          />

          <Select
            options={INGREDIENTS}
            placeholder="Select ingredients"
            className="mb-2"
            isMulti
            value={filters.ingredients}
            onChange={(val) => setFilters({ ...filters, ingredients: val })}
          />

          <Select
            options={INTOLERANCE}
            placeholder="Select intolerance"
            className="mb-2"
            isMulti
            value={filters.intolerance}
            onChange={(val) => setFilters({ ...filters, intolerance: val })}
          />

          <Select
            options={SORTINGOPTIONS}
            placeholder="Sort"
            className="mb-2"
            value={filters.sort}
            onChange={(val) => setFilters({ ...filters, sort: val })}
          />
          <button type="submit" className="btn submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FilteringTab;

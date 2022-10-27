import "../filteringBar/filteringTab.scss";

const FilteringTab = () => {
  return (
    <>
      <div className="filteringTab p-3 me-3">
        <select
          className="form-select mb-2"
          aria-label="Default select example"
        >
          <option selected>Select cuisine</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
        >
          <option selected>Select tools</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
        >
          <option selected>Select ingredients</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
        >
          <option selected>Select tolerance</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
        >
          <option selected>Sort</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};
export default FilteringTab;
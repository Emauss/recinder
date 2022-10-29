import "../filteringBar/filteringTab.scss";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FilteringTab = ({filters, setFilters}) => {

  return (
    <div className="col-12 col-md-3">
      <div className="filteringTab p-3">
        <Select options={options} placeholder="Select cuisine" className="mb-2" isMulti onChange={(val) => setFilters({...filters, cuisine: val})}/>
        <Select options={options} placeholder="Select category" className="mb-2" isMulti onChange={(val) => setFilters({...filters, category: val})}/>
        
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
        <select className="form-select" aria-label="Default select example">
          <option selected>Sort</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};
export default FilteringTab;

import "../filteringBar/filteringTab.scss";
import Select from "react-select";

const cuisine = [
  { value: "american", label: "American" },
  { value: "chinese", label: "Chinese" },
  { value: "european", label: "European" },
  { value: "greek", label: "Greek" },
  { value: "mexican", label: "Mexican" },
  { value: "thai", label: "Thai" },
];

const category = [
  { value: "breakfast", label: "Breakfast" },
  { value: "dessert", label: "Dessert" },
  { value: "fingerfood", label: "Fingerfood" },
  { value: "main course", label: "Main course" },
  { value: "soup", label: "Soup" },
  { value: "snack", label: "Snack" },
];

const tools = [
  { value: "blender", label: "Blender" },
  { value: "bowl", label: "Bowl" },
  { value: "frying pan", label: "Frying Pan" },
  { value: "pan", label: "Pan" },
  { value: "pot", label: "Pot" },
  { value: "stove", label: "Stove" },
];

const ingredients = [
  { value: "apple", label: "Apple" },
  { value: "bacon", label: "Bacon" },
  { value: "beans", label: "Beans" },
  { value: "beef", label: "Beef" },
  { value: "bread", label: "Bread" },
  { value: "carp", label: "Carp" },
  { value: "carrots", label: "Carrots" },
  { value: "cheese", label: "Cheese" },
  { value: "chicken base", label: "Chicken" },
  { value: "dried tomatoes", label: "Dried Tomatoes" },
  { value: "egg substitute", label: "Egg" },
  { value: "fish", label: "Fish" },
  { value: "garlic", label: "Garlic" },
  { value: "hazelnuts", label: "Hazelnuts" },
  { value: "jalapeno", label: "Jalapeno" },
  { value: "kiwis", label: "Kiwi" },
  { value: "lamb", label: "Lamb" },
  { value: "milk", label: "Milk" },
  { value: "onion", label: "Onion" },
  { value: "pasta", label: "Pasta" },
];

const intolerance = [
  { value: "dairy", label: "Dairy" },
  { value: "egg", label: "Egg" },
  { value: "gluten", label: "Gluten" },
  { value: "grain", label: "Grain" },
  { value: "peanut", label: "Peanut" },
  { value: "seafood", label: "Seafood" },
  { value: "soy", label: "Soy" },
  { value: "wheat", label: "Wheat" },
];

const sortingOptions = [
  { value: "time", label: "Time" },
  { value: "price", label: "Price" },
  { value: "servings", label: "Servings" },
];

const FilteringTab = ({ filters, setFilters }) => {
  return (
    <div className="col-12 col-md-3">
      <form>
        <div className="filteringTab p-3">
          <Select
            options={cuisine}
            placeholder="Select cuisine"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, cuisine: val })}
          />
          <Select
            options={category}
            placeholder="Select category"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, category: val })}
          />

          <Select
            options={tools}
            placeholder="Select tools"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, tools: val })}
          />

          <Select
            options={ingredients}
            placeholder="Select ingredients"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, ingredients: val })}
          />

          <Select
            options={intolerance}
            placeholder="Select intolerance"
            className="mb-2"
            isMulti
            onChange={(val) => setFilters({ ...filters, intolerance: val })}
          />

          <Select
            options={sortingOptions}
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

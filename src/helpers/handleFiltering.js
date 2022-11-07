export const handleFiltering = (e, filters, searchParams, setSearchParams) => {
  e.preventDefault();

  let filteredList = [];
  const arrays = Object.entries(filters);

  for (const arr of arrays) {
    const values = [].concat(...arr);
    filteredList.push(values[0]);
    let chosenFilters = [];

    for (let i = 1; i < values.length; i++) {
      const specific = Object.values(values[i]);
      chosenFilters.push(specific[0]);
    }

    chosenFilters = chosenFilters.join(",+");
    filteredList.push(chosenFilters);
  }

  let urlParams = "";
  filteredList.forEach((value, index) => {
    if (index % 2) {
      urlParams += value + "&";
    } else {
      urlParams += value + "=";
    }
  });

  setSearchParams(urlParams);
};

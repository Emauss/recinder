export const convertRawParam = (item) => {
  return item
    .map((filter) => {
      return filter.value;
    })
    .join(",+");
};

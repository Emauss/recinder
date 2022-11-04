import axios from "axios";

export const getAllRecipes = async (filters) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/complexSearch`, {
      params: {
        filters: filters,
        apiKey: process.env.REACT_APP_API_KEY,
        addRecipeInformation: true,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSpecificRecipes = async (filters) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/complexSearch`, {
      params: {
        cuisine: "american",
        apiKey: process.env.REACT_APP_API_KEY,
        addRecipeInformation: true,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

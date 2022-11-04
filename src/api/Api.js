import axios from "axios";

export const getRecipes = async (number = 10) => {
  const params = {};
  params.apiKey = process.env.REACT_APP_API_KEY;
  params.addRecipeInformation = true;
  params.number = number;

  return await axios
    .get(`${process.env.REACT_APP_API_URL}/complexSearch`, {
      params: params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
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

import axios from "axios";

export const getAllRecipes = async (offset = 0) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/complexSearch`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        addRecipeInformation: true,
        offset: offset,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

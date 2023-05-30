import { useQuery } from "react-query";
import axios from "axios";
import { ingredientsQuery } from "./constants";

const useIngredients = (token: string) => {
  return useQuery("ingredients", () =>
    axios
      .get(ingredientsQuery, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => response.data)
  );
};

export default useIngredients;

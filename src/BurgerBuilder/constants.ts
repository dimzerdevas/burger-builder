const imgUrl = "https://xm-crm-react-exercise-server.herokuapp.com/img";
const bunBottom = "bun_bottom.png";
const bunTop = "bun_top.png";
const ingredientsQuery =
  "https://xm-crm-react-exercise-server.herokuapp.com/ingredients";

interface Ingredient {
  id: number;
  name: string;
  src: string;
}

export { imgUrl, bunBottom, bunTop, Ingredient, ingredientsQuery };

import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loding ...</p>
      ) : (
        food.extendedIngredients.map((i) => <Item i={i} />)
      )}
    </div>
  );
}

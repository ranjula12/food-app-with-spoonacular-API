import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./itemList";
export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "3e8e181b9fa04f78afaa72da333d4be5";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);
  return (
    <div className={styles.recipeCared}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetail}>
          <span>
            <strong>🕔{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨🏻‍👩🏻‍👦🏻‍👦🏻<strong>Serves {food.servings} </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian " : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $<span> {food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instruction</h2>
      <div className={styles.recipeInstruction}>
        <ol>
          {isLoading ? (
            <p>"Loading..."</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

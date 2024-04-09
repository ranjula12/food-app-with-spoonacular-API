import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div className={styles.container}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}

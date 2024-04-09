import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodID }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} />
      <div className={styles.item_content}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            setFoodID(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

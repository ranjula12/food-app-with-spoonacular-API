import steyles from './item.module.css'
export default function Item({ i }) {
  return (
    <div>
      <div className={steyles.itemContainer}>
        <div className={steyles.imageContainer}>
          <img
          className={steyles.image}
            src={`https://img.spoonacular.com/ingredients_100x100/` + i.image}
          />
        </div>

        <div className={steyles.nameContainer}>
          <div className={steyles.name}>{i.name}</div>
          <h3 className={steyles.amount}>
            {i.amount} {i.unit}
          </h3>
        </div>
      </div>
    </div>
  );
}

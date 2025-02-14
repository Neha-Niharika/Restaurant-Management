interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface DishCard {
  dish: Dish;
}

function DishCard({ dish }: DishCard) {
  return (
    <>
      <img src={dish.image} height="200" width="300" />
      <h1>{dish.name}</h1>
      <p>Cost : {dish.price}</p>
    </>
  );
}

export default DishCard;

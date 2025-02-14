import DishCard from "./DishCard";

const dishes = [
  {
    id: 1,
    name: "Maggie",
    price: 20,
    image:
      "https://littlekitchen.in/wp-content/uploads/2024/05/Plain-maggie.jpg",
  },
  {
    id: 2,
    name: "Coffee",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCjQlsBZIAV0LsneV7WRawhdQGm4l_jqkcg&s",
  },
];
function Menu() { 
  return (
    <>
      <h1>Today's Special</h1>
      <div>
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </>
  );
}

export default Menu;

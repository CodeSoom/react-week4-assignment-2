export default function List({ restaurantList }) {
  if (!restaurantList || !restaurantList.length) {
    return null;
  }

  return (
    <ul>
      {restaurantList.map((restaurant) => (
        `${restaurant.name} | ${restaurant.category} | ${restaurant.address}`
      ))}
    </ul>
  );
}

export default function Item({
  restaurant: {
    restaurantId,
    restaurantName,
    restaurantCategory,
    restaurantAddress,
  },
}) {
  return (
    <li>
      {restaurantName} | {restaurantCategory} | {restaurantAddress}
    </li>
  );
}

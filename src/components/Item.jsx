export default function Item({
  restaurant: {
    restaurantId, // TODO: 레스토랑 삭제 기능이 나오면 사용할 prop
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

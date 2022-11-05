export default function List({ restaurantList }) {
  if (restaurantList.length === 0) {
    return <></>;
  }
  return (
    <ul>
      {
        restaurantList.map((item) => (
          <li key={item.id}>
            {item.name}
            |
            {item.category}
            |
            {item.address}
          </li>
        ))
      }
    </ul>
  );
}

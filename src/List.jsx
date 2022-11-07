export default function List({ restaurantLists }) {
  if (restaurantLists.length === 0) {
    return <></>;
  }
  return (
    <ul>
      {
        restaurantLists.map((item) => (
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

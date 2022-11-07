export default function List({ restaurantList }) {
  if (restaurantList.length === 0) {
    return <p>목록이 없어요!</p>;
  }

  return (
    <ul>
      {
        restaurantList.map(({
          id, name, category, address,
        }) => (
          <li key={id}>
            {name}
            |
            {category}
            |
            {address}
          </li>
        ))
      }
    </ul>
  );
}

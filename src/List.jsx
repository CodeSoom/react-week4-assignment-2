export default function List({ restaurantList }) {
  if (!restaurantList.length) {
    return (
      <p>레스토랑 목록이 없습니다.</p>
    );
  }

  return (
    <ul>
      {restaurantList.map((restaurant) => {
        const {
          id, name, category, address,
        } = restaurant;

        return (
          <li key={id}>
            {`${name} | ${category} | ${address}`}
          </li>
        );
      })}
    </ul>
  );
}

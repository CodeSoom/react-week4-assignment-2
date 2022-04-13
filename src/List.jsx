export default function List({
  restaurantList,
}) {
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

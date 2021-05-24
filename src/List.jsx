export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => {
        const {
          id, name, category, address,
        } = restaurant;

        return (
          <li key={id}>
            {name}
            {category}
            {address}
          </li>
        );
      })}

    </ul>
  );
}

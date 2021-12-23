// restaurants.map에서 react/destructuring-assignment lint 에러 발생

const RestaurantList = ({ restaurants }) => {
  if (!restaurants || !restaurants.length) {
    return null;
  }

  return (
    <ul>
      {restaurants.map(({
        id,
        name,
        category,
        address,
      }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{category}</span>
          <span>{address}</span>
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;

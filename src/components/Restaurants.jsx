import Restaurant from './Restaurant';

export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return (
      <p>레스토랑을 추가해주세요!</p>
    );
  }

  return (
    <ul>
      {
        restaurants.map(({
          name, address, category, id,
        }) => (
          <Restaurant
            key={id}
            name={name}
            category={category}
            address={address}
          />
        ))
      }
    </ul>
  );
}

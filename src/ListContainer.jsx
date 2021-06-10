export default function ListContainer() {
  const dummyItems = [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
  ];
  return (
    <ul>
      {dummyItems.map((restaurant) => (
        <li key={restaurant.name}>
          <p>
            {restaurant.name}
            {' '}
            |
            {' '}
            {restaurant.category}
            {' '}
            |
            {' '}
            {restaurant.address}
            {' '}
          </p>
        </li>
      ))}
    </ul>
  );
}

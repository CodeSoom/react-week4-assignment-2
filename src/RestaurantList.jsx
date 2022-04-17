import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <p>레스토랑 정보가 없습니다.</p>
    );
  }

  return (
    <ol data-testid="restaurants-list">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} information={restaurant} />
      ))}
    </ol>
  );
}

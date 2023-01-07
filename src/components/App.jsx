export const RESTAURANTS_LIST = [
  {
    id: 1,
    name: '홍콩반점',
    category: '중식',
    location: '서울시',
  },
  {
    id: 2,
    name: '달초밥',
    category: '일식',
    location: '안산시',
  },
  {
    id: 3,
    name: '막퍼주는 시골밥상',
    category: '한식',
    location: '인천시',
  },
];

export default function App() {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>

      <ul>
        {RESTAURANTS_LIST.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            |
            {restaurant.category}
            |
            {restaurant.location}
          </li>
        ))}
      </ul>

      <form>
        <input />
        <input />
        <input />

        <button type="button">등록</button>
      </form>
    </div>
  );
}

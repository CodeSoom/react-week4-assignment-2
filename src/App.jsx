import List from './List';

export default function App() {
  const restaurantList = [
    {
      id: 1, name: '시카고피자', category: '양식', address: '이태원구',
    },
    {
      id: 2, name: '마녀식당', category: '한식', address: '서울시 강남구',
    },
  ];

  function handleChangeRestaurantName(event) {

  }

  function handleChangeRestaurantCategory(event) {

  }

  function handleChangeRestaurantAddress(event) {

  }

  return (
    <div>
      <List restaurantList={restaurantList} />
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
        onChange={handleChangeRestaurantName}
      />
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
        onChange={handleChangeRestaurantCategory}
      />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
        onChange={handleChangeRestaurantAddress}
      />
    </div>
  );
}

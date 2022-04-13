import Inputs from './Inputs';
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
      <Inputs
        onChangeName={handleChangeRestaurantName}
        onChangeCategory={handleChangeRestaurantCategory}
        onChangeAddress={handleChangeRestaurantAddress}
      />
    </div>
  );
}

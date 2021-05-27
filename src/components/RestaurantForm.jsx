import InputBox from './InputBox';

import useRestaurants from '../hooks/useRestaurants';

export default function RestaurantForm() {
  const { addNewToRestaurants } = useRestaurants();

  return (
    <>
      <InputBox name="name" />
      <InputBox name="category" />
      <InputBox name="address" />

      <button
        type="button"
        onClick={addNewToRestaurants}
      >
        등록
      </button>
    </>
  );
}

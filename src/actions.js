export default function updateRestaurant(placeholder, value) {
  return {
    type: 'updateRestaurant',
    payload: {
      placeholder,
      value,
    },
  };
}

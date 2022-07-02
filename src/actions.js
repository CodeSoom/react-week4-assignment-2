export default function UpdateRestaurantName(nameInput) {
  return {
    type: 'UpdateRestaurantName',
    payload: {
      nameInput,
    },
  };
}

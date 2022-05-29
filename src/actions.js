export default function addRestaurant({ name, category, address }) {
  return {
    type: 'addRestaurant',
    payload: {
      name,
      category,
      address,
    },
  };
}

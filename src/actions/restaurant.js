export const TYPE_ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = ({ name, category, address }) => ({
  type: TYPE_ADD_RESTAURANT,
  payload: { name, category, address },
});
